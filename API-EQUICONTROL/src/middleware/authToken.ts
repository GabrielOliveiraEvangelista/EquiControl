import { NextFunction, Request, Response } from "express";
import { getToken } from "../auth/login";
import { AppError } from "../utils/AppError";
const isToken: (req: Request, res: Response, next: NextFunction) => void =
  async function authToken(req: Request, res: Response, next: NextFunction) {
    const { email, senha } = req.body;
    const dataOwner = await getToken(email, senha);
    if (!dataOwner.fields.token) {
      throw new AppError("Token não foi gerado !");
    }
    req.abqmToken = dataOwner.fields.token;
    next();
  };
export { isToken };
