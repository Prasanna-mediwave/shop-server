import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secretKey = "secretKey";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: any = req.headers["access-token"];
  if (!token) {
    return res.status(401).send("No token provided!");
  }
  jwt.verify(token, secretKey, (err: any) => {
    if (err) {
      return res.status(403).send("Unauthorized! Access Token was expired!");
    }
    next();
  });
};
