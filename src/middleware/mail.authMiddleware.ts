import { Request,Response,NextFunction } from "express"
import { verifyJwtAccessToken } from "../utils/jwt"
import { ErrorResponse, MessagesErrorResponse } from "../utils/response.utils"


export const authMiddleware = async(req:Request,res:Response,next:NextFunction) => {
    const HeadToken = req.headers.authorization?.split(" ")[1]
    if(!HeadToken){throw new Error("Token does not provided in auth header !")}
    const decoded = await verifyJwtAccessToken(HeadToken)
    if(!decoded){ErrorResponse(req,res,401,{},MessagesErrorResponse.UNAUTHORISED)}
    req['user']= decoded
    next()
}