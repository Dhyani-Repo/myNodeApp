import { Request,Response } from "express"
import { EMainGender, ILoginBody } from "../types/main.types"
import { ACCESS_ROLE } from "@prisma/client"
import { createUserOnDB, getUserByEmail, getUserFromDB, getUserTokenFromDB, storeToken } from "../services/main.service"
import { compareHashedData } from "../utils/hashing"
import { getTokens, verifyJwtRefreshToken } from "../utils/jwt"
import { SuccessResponse, MessagesSuccessResponse, ErrorResponse, MessagesErrorResponse } from "../utils/response.utils"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { RedisClientSingleton } from "../utils/redis"
export class MainController {
    private redis:RedisClientSingleton
    private constructor(redis:RedisClientSingleton) {
        console.log("MainController has been initialised.....")
        this.redis = redis
    }
    public static init = async () => {
        const redisClient = await RedisClientSingleton.connect()
        const mainControllerInstance = new MainController(redisClient)
        return mainControllerInstance
    }
    public register = async(req:Request,res:Response) => {
        try{
            console.log("This is Request PAYLOAD: ",req.body)
            const userData = await createUserOnDB(req?.body)
            SuccessResponse(req,res,200,{user:userData},MessagesSuccessResponse.CREATED)
        }catch(err:any){
            console.log("error: code : ",err?.code)
            if(err instanceof PrismaClientKnownRequestError || err.code=='P2002'){
                ErrorResponse(req,res,409,{error:err},`${err.meta.target} is not unique hence ${MessagesErrorResponse.RESOURCE_CREATION_FAILED}`)
            }else{
                ErrorResponse(req,res,409,{error:err},MessagesErrorResponse.DUPLICATE_ENTRY)
            }
        }
        
    }

    public refreshToken = async(req:Request,res:Response) => {
        try{
            const token = req.headers.authorization?.split(" ")[1] 
            if(!token){throw new Error(MessagesErrorResponse.REFERESH_TOKEN_NOT_FOUND)}
            const decoded:any = await verifyJwtRefreshToken(token)
            if(!decoded || !decoded?.userId){throw new Error(MessagesErrorResponse.UNAUTHORISED)}
            // const userToken = await getUserTokenFromDB(decoded.userId)
            const userToken = String(await this.redis.getValueFromRedis(`Id_${decoded.userId}`))
            if(!(userToken === token)){
                ErrorResponse(req,res,401,{},MessagesErrorResponse.UNAUTHORISED)
            }else{
                const tokens = getTokens({userId:decoded.userId})
//              const updateTokensIntoDb = storeToken(tokens.refreshToken,userToken?.userId as string)
                await this.redis.setValueInRedis(`Id_${decoded.userId}`,tokens?.refreshToken)
                SuccessResponse(req,res,200,tokens,MessagesSuccessResponse.REFRESHED)
            }
        }catch(err:any){
            console.log(err)
            ErrorResponse(req,res,500,err,MessagesErrorResponse.RANDOM_ERROR)
        }
    }
    public login = async(req:Request,res:Response) => {
        try{
            const data:ILoginBody = req?.body
            let token :any = {}
            if(!data || !data.email || !data.password){throw new Error(MessagesErrorResponse.LOGIN_INVALID_DATA)}
            const UserExisted = await getUserByEmail(String(data.email))
            console.log("User existed Data: ",UserExisted)
            if(!UserExisted){throw new Error(MessagesErrorResponse.USER_NOT_EXIST)}
            const isPasswordTrue = await compareHashedData(data.password,UserExisted.password)
            if(isPasswordTrue){  token = getTokens({userId:UserExisted.id}) }
            // await storeToken(token.refreshToken, UserExisted.id)
            this.redis.deleteKeyValuePair(`Id_${UserExisted.id}`)
            this.redis.setValueInRedis(`Id_${UserExisted.id}`,token.refreshToken)
            SuccessResponse(req,res,200,{data:token},MessagesSuccessResponse.LOGIN_SUCCESS)
        }catch(err:any){
            ErrorResponse(req,res,401,{},MessagesErrorResponse.WRONG_CREDENTIALS)
        }
        
    }
    public getUserById = async(req:Request, res:Response) => {
        try{
            const id = req.params.id
            const user = req.user
            const userData:any = await getUserFromDB(user?.userId)
            if(!userData){throw new Error(MessagesErrorResponse.UNAUTHORISED)}
            if([ACCESS_ROLE.ADMIN,ACCESS_ROLE.SUPER_ADMIN].includes(userData?.role)){ErrorResponse(req,res,401,{},MessagesErrorResponse.UNAUTHORISED)}
            if(!id){throw new Error("Id not provided in params for user to get details")}
            const expectedUserData = await getUserFromDB(id as string)
            if(!expectedUserData){throw new Error("No Such Id Available of User in DB")}
            SuccessResponse(req,res,200,{data:expectedUserData},MessagesSuccessResponse.FETCH_SUCCESS)
        }catch(err:any){
            ErrorResponse(req,res,401,{},MessagesErrorResponse.RANDOM_ERROR)
        }
    }
}