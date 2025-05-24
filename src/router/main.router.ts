import { Router } from "express";
import { MainController } from "../controller/main.controller";
import { EMainGender } from "../types/main.types";
import { authMiddleware } from "../middleware/main.authMiddleware";
import { validateSchema } from "../middleware/validateSchema.middleware";
import { RegisterSchema } from "../validations/joy/register.schema";
import { RedisClientSingleton } from "../utils/redis";
// export const getMainRouter =  async() => {
//   const rout = Router();
//   const controller = await MainController.init();

//   rout.post("/user/create", validateSchema(RegisterSchema), controller.register);
//   rout.post("/user/login", controller.login);
//   rout.post("/refresh", controller.refreshToken);
//   rout.get("/user/:id", authMiddleware, controller.getUserById);

//   return rout;
// };
export class MainRouter {

  private controller: MainController;

  private constructor(controller: MainController) {
    this.controller = controller;
  }

  public static init = async () => {
    const mainController = await MainController.init();
    const mainRouter = new MainRouter(mainController)
    return mainRouter
  }
  
  public getRouter = () => {
    const router = Router();
    router.post("/user/create", validateSchema(RegisterSchema), this.controller.register.bind(this.controller));
    router.post("/user/login", this.controller.login);
    router.post("/refresh", this.controller.refreshToken);
    router.get("/user/:id", authMiddleware, this.controller.getUserById);
    return router;
  }

}
