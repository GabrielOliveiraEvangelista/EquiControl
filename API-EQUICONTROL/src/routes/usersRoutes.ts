import { UsersController } from "../controller/UsersController";
import { Router } from "express";

const usersController = new UsersController();
const usersRoutes = Router();

usersRoutes.post("/create", usersController.create);

export { usersRoutes };
