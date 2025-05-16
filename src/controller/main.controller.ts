import { Request,Response } from "express"
import { EMainGender, IMainStd } from "../types/main.types"
import { PrismaClient } from "@prisma/client"
import { createUserOnDB, getUserFromDB } from "../services/main.service"

const prisma = new PrismaClient()
export class MainController {
    constructor() {
        console.log("MainController has been initialised.....")
    }
    public createUser = async(req:Request,res:Response) => {
        console.log("This is Request PAYLOAD: ",req.body)
        const userData = await createUserOnDB(req?.body)
        console.log("Hey The Current Istance of User Consist Data: ",userData)
        res.json({User:userData})
    }
    public getUser = async(req:Request, res:Response) => {
        console.log(req?.params.userId)
        const userid = req.params.userId
        if(!userid){throw new Error("Id not provided")}
        const userData = await getUserFromDB(userid as string)
        res.json({success:true,data:userData})
    }
}