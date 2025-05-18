import { createClient } from 'redis';

const redis = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redis.on('error', (err) => console.error('Redis Client Error', err));

export async function initRedis() {
  if (!redis.isOpen) await redis.connect();
}

export default redis;

export const setValueInRedis = async (key:string,value:any) => {
    try{
        await redis.set(key,value)
    }catch(e){
        console.log("ERROR Accured While Setting Value: ",e)
    }
}

export const getValueFromRedis = async (key:string) => {
    try{
        await redis.get(key)
    }catch(e){
        console.log("ERROR Accured While Setting Value: ",e)
    }
}
