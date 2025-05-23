import { ACCESS_ROLE, GENDER_ENUM_FOR_USER } from "@prisma/client";
import Joi from "joi";

export const RegisterSchema = Joi.object({
    name: Joi.string().required(),
    age:Joi.number().min(18).max(100).required(),
    gender:Joi.string().valid(...Object.values(GENDER_ENUM_FOR_USER)).required(),
    rollNo:Joi.number().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    role:Joi.string().valid(...Object.values(ACCESS_ROLE)).required()
})



export const LoginSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})
