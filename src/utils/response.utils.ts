import { Request,Response } from "express"

export const SuccessResponse = (
    req:Request,
    res:Response,
    code:number=200,
    data:any,
    message:string
) => {
        
    res.json({
        sucess: true,
        httpCode: code,
        message: message,
        ...data
    })
    
}




export const MessagesSuccessResponse = {
  FETCH_SUCCESS: "Data fetched successfully",
  CREATED: "Resource created successfully" ,
  NO_CONTENT:  "No content available" ,
  LOGIN_SUCCESS: "Login successful" ,
  AUTHORISED : "User Authorised",
  REFRESHED: "Tokens has been refreshed successfully"
};




export const ErrorResponse  = async (
    req:Request,
    res:Response,
    code:number=500,
    data:any,
    message:string
) => {
    res.json({
        success: false,
        httpCode:code,
        ...data,
        message:message
    })
}   

export const MessagesErrorResponse = {
    UNAUTHORISED: "Unauthorized Access !",
    RANDOM_ERROR: "Invalid Token !",
    REFERESH_TOKEN_NOT_FOUND : "No Referesh Token Provided !",
    USER_NOT_EXIST:"User doesn't exist !",
    LOGIN_INVALID_DATA : "Please provide email/username and password !",
    VALIDATION_FAILED: "Invalid Payload !",
    RESOURCE_CREATION_FAILED:"Failed to create user !",
    DUPLICATE_ENTRY:"User Already Exist !",
    WRONG_CREDENTIALS:"Wrong email and password !",
    REDIS_CONNECTION_FAILED: "Unable to connect with redis !"
}