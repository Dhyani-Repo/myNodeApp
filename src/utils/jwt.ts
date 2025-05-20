import jwt from 'jsonwebtoken'

export const getTokens = (data:any) => {
    try{
        const accessToken =  jwt.sign(data, `${process.env.JWT_ACCESS_KEY}`, { expiresIn:'50s' });
        const refreshToken =  jwt.sign(data, `${process.env.JWT_REFERESH_KEY}`, { expiresIn:'3m' });
        return { accessToken,refreshToken }
    }catch(err){
        throw new Error("Error while creating token")
    }
}

export const verifyJwtAccessToken = async(token:string) => {
    try{
        const decodedToken =  jwt.verify(token,`${process.env.JWT_ACCESS_KEY}`)
        return decodedToken
    }catch(err){
        throw new Error("Error accured while verifying Auth Header")
    }
}

export const verifyJwtRefreshToken = async(token:string) => {
    try{
        const decodedToken =  jwt.verify(token,`${process.env.JWT_REFERESH_KEY}`)
        console.log("testing error: ",decodedToken)
        return decodedToken
    }catch(err){
        console.log(err)
        throw new Error("Error accured while verifying Auth Header")
    }
}
