import { NextFunction, Request, Response } from 'express';
import { getToken } from '../auth/login';
import { AppError } from '../utils/AppError';
const isToken: (req: Request, res: Response, next: NextFunction) => void =
  async function authToken(req: Request, res: Response, next: NextFunction) {
    const token = await getToken();
    if (!token) {
      throw new AppError('Token não foi gerado !');
    }
    req.abqmToken = token;
    next();
  };
export { isToken };
