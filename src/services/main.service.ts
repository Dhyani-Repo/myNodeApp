import { PrismaClient, ROLLBACK_ACCESS } from "@prisma/client";
import { IMainStd } from "../types/main.types";
import { makeHashedString } from "../utils/hashing";
const prisma = new PrismaClient()

export const createUserOnDB = async(payload:IMainStd, role:ROLLBACK_ACCESS = ROLLBACK_ACCESS.USER) => {
    const hashedPassword = await makeHashedString(payload.password)
    
    const user = await prisma.testing_table_user.create({
        data:{
            name:payload.name,
            age:payload.age,
            gender:payload.gender,
            rollNo:payload.rollNo,
            email:payload.email,
            password:hashedPassword,
            role:role
        }}
    )
    console.log("CREATED USER: ", user)
    return user
}



export const getUserFromDB = async(userId:string) => {
    try{
        const user = await prisma.testing_table_user.findUnique({where:{id:userId}})
        console.log("getUserFromDB userData : ", user)
        return user
    }catch(err){
        console.log(err)
        throw new Error(`error while getting user From db: ${err}`)
    }
    
}

export const getUserByEmail = async(email:string) => {
    try{
        const user = await prisma.testing_table_user.findUnique({where:{email:email}})
        console.log("getUserByEmail userData: ", user)
        return user
    }catch(err){
        console.log(err)
        throw new Error(`error while getting user From db: ${err}`)
    }
}

