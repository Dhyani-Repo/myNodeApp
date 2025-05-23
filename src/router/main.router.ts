import { Router } from "express";
import { MainController } from "../controller/main.controller";
import { EMainGender } from "../types/main.types";
import { authMiddleware } from "../middleware/main.authMiddleware";
import { validateSchema } from "../middleware/validateSchema.middleware";
import { RegisterSchema } from "../validations/joy/register.schema";
const rout = Router()
const contoller = new MainController()


rout.post("/user/create",validateSchema(RegisterSchema),contoller.register)
rout.post("/user/login",contoller.login)
rout.post("/refresh",contoller.refreshToken)
rout.get("/user/:id",authMiddleware,contoller.getUserById)
export default rout