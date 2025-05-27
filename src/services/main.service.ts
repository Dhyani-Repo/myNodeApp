import { PrismaClient, ACCESS_ROLE } from "@prisma/client";
import { IMainStd } from "../types/main.types";
import { makeHashedString } from "../utils/hashing";
import { DBPostgres } from "../db/postgres.connect";


export class DBService {
    prisma:PrismaClient
    constructor() {
        this.prisma =  DBPostgres.getPrismaClient()
    }
    createUserOnDB = async(payload:IMainStd, role:ACCESS_ROLE = ACCESS_ROLE.USER) => {
        const hashedPassword = await makeHashedString(payload.password)
        const user = await this.prisma.testing_table_user.create({
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
    getUserFromDB = async(userId:string) => {
        try{
            const user = await this.prisma.testing_table_user.findUnique({where:{id:userId}})
            return user
        }catch(err){
            console.log(err)
            throw new Error(`error while getting user From db: ${err}`)
        }
        
    }
    getUserTokenFromDB = async(userId:string) => {
        try{
            const userToken = await this.prisma.tokens.findFirst({where:{userId:userId}})
            return {...userToken}
        }catch(err){
            console.log(err)
            throw new Error(`error while getting user From db: ${err}`)
        }
        
    }
    getUserByEmail = async(email:string) => {
        try{
            const user = await this.prisma.testing_table_user.findUnique({where:{email:email}})
            return user
        }catch(err){
            console.log(err)
            throw new Error(`error while getting user From db: ${err}`)
        }
    }
    storeToken = async(token:string, id:string) => {
        try{
            const storedToken = await this.prisma.tokens.upsert({
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

}

