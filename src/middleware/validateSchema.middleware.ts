// import { NextFunction, Request, Response } from "express"
// import joi from "joi"
// import { ErrorResponse, MessagesErrorResponse } from "../utils/response.utils"


// export const validateSchema = async(schema:joi.ObjectSchema<any>) => {
//     return (req:Request,res:Response, next:NextFunction)=>{
//     const value = schema.validate(req.body)
//     console.log("validation status: ",value)
//     if(value) next()
//     else ErrorResponse(req,res,400,{},MessagesErrorResponse.VALIDATION_FAILED)
// }
// }




import { Request, Response, NextFunction } from 'express';
import Joi, { ObjectSchema } from 'joi';
import { ErrorResponse, MessagesErrorResponse } from '../utils/response.utils';

export const validateSchema = (schema: ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction):void|any => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
        }));
        return ErrorResponse(req,res,400,{result:errors},MessagesErrorResponse.VALIDATION_FAILED)
    }
    req.body = value; 
    next();
  };
};
