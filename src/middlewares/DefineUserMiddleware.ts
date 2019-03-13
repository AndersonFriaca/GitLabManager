import { BaseMiddleware } from "inversify-express-utils";
import { Request, Response, NextFunction } from "express";
import { provide } from "../config/ioc/ioc";
import TYPES from "../config/ioc/types";
import Principal from "../auth/Principal";

@provide(TYPES.DefineUserMiddleware)
export default class DefineUserMiddleware extends BaseMiddleware {
  handler(req: Request, res: Response, next: NextFunction): void {
    console.log("middleware");
    this.httpContext.user = new Principal();
    this.httpContext.user.details = { test: 1 };
    next();
  }
}
