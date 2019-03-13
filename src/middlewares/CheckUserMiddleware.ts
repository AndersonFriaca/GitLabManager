import { NextFunction, Request, Response } from "express";
import Principal from "../auth/Principal";

export default (req: Request | any, res: Response, next: NextFunction) => {
  const user = new Principal();
  user.details = { middleware: 1 };
  next();
};
