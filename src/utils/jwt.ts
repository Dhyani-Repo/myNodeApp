import jwt from 'jsonwebtoken'

export const getToken = (data:any) => {
    try{
        const token =  jwt.sign(data, `${process.env.JWT_KEY}`, { expiresIn:'1h' });
        return token
    }catch(err){
        throw new Error("Error while creating token")
    }
}

export const verifyJwtToken = async(token:string) => {
    try{
        const decodedToken =  jwt.verify(token,`${process.env.JWT_KEY}`)
        return decodedToken
    }catch(err){
        throw new Error("Error accured while verifying Auth Header")
    }
}
