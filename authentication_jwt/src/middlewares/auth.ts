import dotenv from "dotenv";
dotenv.config();
import { Request, Response, NextFunction } from "express";

import * as jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ massage: "Token is require" });
  }
  const [, token] = authHeader.split(" ");

  try {
    await jwt.verify(token, process.env.APP_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ massage: "Token invalid" });
  }
};
