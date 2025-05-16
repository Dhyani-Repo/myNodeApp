import { PrismaClient } from "@prisma/client";
import { IMainStdDB, IMainStd } from "../types/main.types";
const prisma = new PrismaClient()
export const createUserOnDB = async(payload:IMainStd) => {
    const user = await prisma.testing_table_user.create({
        data:{
            name:payload.name,
            age:payload.age,
            gender:payload.gender,
            rollNo:payload.rollNo}
        }
    )
    console.log("CREATED USER: ", user)
    return user
}



export const getUserFromDB = async(userId:string) => {
    const user = await prisma.testing_table_user.findUnique({where:{id:userId}})
    console.log("CREATED USER: ", user)
    return user
}
