import { Request,Response } from "express"
import { EMainGender, ILoginBody } from "../types/main.types"
import { ACCESS_ROLE } from "@prisma/client"
import { createUserOnDB, getUserByEmail, getUserFromDB, getUserTokenFromDB, storeToken } from "../services/main.service"
import { compareHashedData } from "../utils/hashing"
import { getTokens, verifyJwtRefreshToken } from "../utils/jwt"
import { SuccessResponse, MessagesSuccessResponse, ErrorResponse, MessagesErrorResponse } from "../utils/response.utils"
import { decode } from "jsonwebtoken"
export class MainController {
    constructor() {
        console.log("MainController has been initialised.....")
    }
    public register = async(req:Request,res:Response) => {
        console.log("This is Request PAYLOAD: ",req.body)
        const userData = await createUserOnDB(req?.body)
        console.log("Hey The Current Istance of User Consist Data: ",userData)
        res.json({User:userData})
    }
    
    public refreshToken = async(req:Request,res:Response) => {
        try{
            const token = req.headers.authorization?.split(" ")[1] 
            if(!token){throw new Error("User is not Authorised 1")}
            const decoded:any = await verifyJwtRefreshToken(token)
            if(!decoded || !decoded?.userId){throw new Error("User is not Authorised 2")}
            const userToken = await getUserTokenFromDB(decoded.userId)
            if(!(userToken?.token === token)){
                ErrorResponse(req,res,401,{},MessagesErrorResponse.UNAUTHORISED)
            }else{
                const tokens = getTokens({userId:userToken?.id})
                const updateTokensIntoDb = storeToken(tokens.refreshToken,userToken?.userId as string)
                SuccessResponse(req,res,200,tokens,MessagesSuccessResponse.REFRESHED)
            }
            
        }catch(err:any){
            console.log(err)
            ErrorResponse(req,res,500,err,MessagesErrorResponse.RANDOM_ERROR)
        }
        
    }
    public login = async(req:Request,res:Response) => {
        const data:ILoginBody = req?.body
        let token :any = {}
        if(!data || !data.email || !data.password){throw new Error("Please provide email/username and password")}
        const UserExisted = await getUserByEmail(String(data.email))
        if(!UserExisted){throw new Error("User doesn't exist !")}
        const isPasswordTrue = await compareHashedData(data.password,UserExisted.password)
        if(isPasswordTrue){  token = getTokens({userId:UserExisted.id}) }
        await storeToken(token.refreshToken, UserExisted.id)
        SuccessResponse(req,res,200,{data:token},MessagesSuccessResponse.LOGIN_SUCCESS)
    }
    public getUserById = async(req:Request, res:Response) => {
        const id = req.params.id
        const user = req.user
        console.log("userData after decoding token: ",req.user)
        if(!user&& !user.userId){throw new Error("no user id found after verifing token")}
        const userData:any = await getUserFromDB(user?.userId)
        if(!userData){throw new Error("User does not exist Not Verified !")}
        if([ACCESS_ROLE.ADMIN,ACCESS_ROLE.SUPER_ADMIN].includes(userData?.role)){ErrorResponse(req,res,401,{},MessagesErrorResponse.NOT_ALLOWD)}
        if(!id){throw new Error("Id not provided in params for user to get details")}
        const expectedUserData = await getUserFromDB(id as string)
        if(!expectedUserData){throw new Error("No Such Id Available of User in DB")}
        SuccessResponse(req,res,200,{data:expectedUserData},MessagesSuccessResponse.FETCH_SUCCESS)
    }
}