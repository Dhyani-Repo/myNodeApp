import { Request,Response } from "express"
import { EMainGender, ILoginBody, IMainStd } from "../types/main.types"
import { PrismaClient, ROLLBACK_ACCESS } from "@prisma/client"
import { createUserOnDB, getUserByEmail, getUserFromDB } from "../services/main.service"
import redis from "../utils/redis"
import { compareHashedData } from "../utils/hashing"
import { getToken } from "../utils/jwt"
const prisma = new PrismaClient()
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
    public registerAdmin = async(req:Request,res:Response) => {
        console.log("This is Request PAYLOAD: ",req.body)
        const userData = await createUserOnDB(req?.body,ROLLBACK_ACCESS.ADMIN)
        console.log("Hey The Current Istance of User Consist Data: ",userData)
        res.json({User:userData})
    }
    public login = async(req:Request,res:Response) => {
        const data:ILoginBody = req?.body
        let token :any = {}
        if(!data || !data.email || !data.password){throw new Error("Please provide email/username and password")}
        const UserExisted = await getUserByEmail(String(data.email))
        if(!UserExisted){throw new Error("User doesn't exist !")}
        const isPasswordTrue = await compareHashedData(data.password,UserExisted.password)
        if(isPasswordTrue){  token = getToken({userId:UserExisted.id,role:UserExisted.role, isLoggedIn:true}) }
        res.json({success:true,code:200, data:{token}})
    }
    public getUserById = async(req:Request, res:Response) => {
        console.log(req?.params.id)
        const user = req.user
        console.log("userData after decoding token: ",req.user)
        if(!user&& !user.userId){throw new Error("no user id found after verifing token")}
        const userData = await getUserFromDB(user?.userId)
        if([ROLLBACK_ACCESS.ADMIN,ROLLBACK_ACCESS.SUPER_ADMIN].includes(user?.role)){throw new Error("You are not authorised to see the user details")}
        const id = req.params.id
        if(!id){throw new Error("Id not provided in params for user to get details")}
        const expectedUserData = await getUserFromDB(id as string)
        if(!expectedUserData){throw new Error("No Such Id Available of User in DB")}
        res.json({success:true,data:expectedUserData})
    }
}