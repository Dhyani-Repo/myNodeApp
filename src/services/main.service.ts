import { PrismaClient, ACCESS_ROLE } from "@prisma/client";
import { IMainStd } from "../types/main.types";
import { makeHashedString } from "../utils/hashing";
const prisma = new PrismaClient()

export const createUserOnDB = async(payload:IMainStd, role:ACCESS_ROLE = ACCESS_ROLE.USER) => {
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
        return user
    }catch(err){
        console.log(err)
        throw new Error(`error while getting user From db: ${err}`)
    }
    
}

export const getUserTokenFromDB = async(userId:string) => {
    try{
        const userToken = await prisma.tokens.findFirst({where:{userId:userId}})
        return {...userToken}
    }catch(err){
        console.log(err)
        throw new Error(`error while getting user From db: ${err}`)
    }
    
}
export const getUserByEmail = async(email:string) => {
    try{
        const user = await prisma.testing_table_user.findUnique({where:{email:email}})
        return user
    }catch(err){
        console.log(err)
        throw new Error(`error while getting user From db: ${err}`)
    }
}

export const storeToken = async(token:string, id:string) => {
    try{
        const storedToken = await prisma.tokens.upsert({
            where:{ userId:id },
            create:{ userId:id, token:token },
            update:{token}
        })
        return storedToken
    }catch(err){
        console.log(err)
        throw new Error(`error while getting user From db: ${err}`)
    }
}

