import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secretKey = "secretKey";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("No token provided!");
  }
  const tokenData = token.replace("Bearer ", "");
  jwt.verify(tokenData, secretKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).send("Unauthorized! Access Token was expired!");
    }
    console.log(decoded);

    next();
  });
};
export const userToken = (header: any) => {
  const token = header.authorization.replace("Bearer ", "");
  const decode: any = jwt.decode(token);
  return decode.userId;
};
