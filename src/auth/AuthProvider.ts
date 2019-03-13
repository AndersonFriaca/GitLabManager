import { interfaces } from "inversify-express-utils";
import { Request, Response, NextFunction } from "express";
import User from "./AuthUser";
import { provide } from "../config/ioc/ioc";
import TYPES from "../config/ioc/types";

@provide(TYPES.AuthProvider)
export default class AuthProvider implements interfaces.AuthProvider {
  getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<interfaces.Principal> {
    console.log("AuthProvider");
    const token = req.get("PRIVATE-TOKEN");
    return Promise.resolve(new User(token));
  }
}
