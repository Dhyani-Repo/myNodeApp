import { Request,Response,NextFunction } from "express"
import { verifyJwtToken } from "../utils/jwt"


export const authMiddleware = async(req:Request,res:Response,next:NextFunction) => {
    const HeadToken = req.headers.authorization?.split(" ")[1]
    if(!HeadToken){throw new Error("Token does not provided in auth header !")}
    const decoded = await verifyJwtToken(HeadToken)
    if(!decoded){throw new Error("Token did not validated properly !")}
    req['user']= decoded
    next()
}