import { NextFunction, Request, Response } from "express";
import Principal from "../auth/AuthUser";

export default (req: Request | any, res: Response, next: NextFunction) => {
  const user = new Principal(undefined);
  user.details = { middleware: 1 };
  next();
};
