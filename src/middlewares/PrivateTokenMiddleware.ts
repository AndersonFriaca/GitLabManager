import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  if (typeof req.get("PRIVATE_TOKEN") === "undefined")
    return res.status(401).json({ error: "Token not provided" });
  next();
};
