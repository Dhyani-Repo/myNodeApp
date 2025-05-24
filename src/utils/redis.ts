import { createClient, RedisArgument, RedisClientPoolType, RedisClientType, RedisDefaultModules } from 'redis';
import { ErrorResponse, MessagesErrorResponse } from './response.utils';

export class RedisClientSingleton {

    private static redis: RedisClientSingleton 
    private redisClient : RedisClientType

    private constructor(){
        this.redisClient = createClient({url:"redis://localhost:6379"})
        console.log("Instance Redis Has Been Initialised at port 6379")
    }

    public static  connect = async ():Promise<RedisClientSingleton> => {
        try{
            if(!this.redis){
                const redisInstance = new RedisClientSingleton()
                await redisInstance.redisClient.connect()
                this.redis = redisInstance
            }
            return this.redis
        }catch(err){
            throw new Error("Unable to connect with redis")
        }
    }
    public  setValueInRedis = async (key:string,value:any) => {
        try{
            const ack = await this.redisClient.set(key,value)
            console.log("setAck",ack)
            return true
        }catch(e){
            console.log("ERROR Accured While Setting Value into REDIS",e)
        }
    }

    public  getValueFromRedis = async (key:string) => {
        try{
            const value = await this.redisClient.get(key)
            return value
        }catch(e){
            console.log("ERROR Accured While getting Value form REDIS: ",e)
        }
    }
    public  deleteKeyValuePair = async (key:string) => {
        try{
            const value = await this.redisClient.del(key)
            return value
        }catch(e){
            console.log("ERROR Accured While deleting Value form REDIS: ",e)
        }
    }
}