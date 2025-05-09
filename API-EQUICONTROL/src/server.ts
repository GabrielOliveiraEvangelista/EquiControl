import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { isToken } from "./middleware/authToken";
import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const server = express();
server.use(express.json());
server.use(isToken);

server.use(routes);

server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error_client: err.message });
    return;
  }
  if (err instanceof ZodError) {
    res.status(400).json({ error_client_zod: "aaa", issues: err.format() });
  }
  res.status(500).json({ error_server: err.message });
});

server.listen(8080, () => console.log("Servidor on-line na porta 8080"));
