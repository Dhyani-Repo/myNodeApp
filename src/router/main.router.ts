import { Router } from "express";
import { MainController } from "../controller/main.controller";
import { EMainGender } from "../types/main.types";
const rout = Router()
const contoller = new MainController()


rout.post("/user/create",contoller.createUser)
rout.get("/user/:userId",contoller.getUser)
export default rout