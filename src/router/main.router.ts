import { Router } from "express";
import { MainController } from "../controller/main.controller";
import { EMainGender } from "../types/main.types";
import { authMiddleware } from "../middleware/mail.authMiddleware";
const rout = Router()
const contoller = new MainController()


rout.post("/user/create",contoller.register)
rout.post("/user/login",contoller.login)
rout.post("/refresh",contoller.refreshToken)
rout.get("/user/:id",authMiddleware,contoller.getUserById)
export default rout