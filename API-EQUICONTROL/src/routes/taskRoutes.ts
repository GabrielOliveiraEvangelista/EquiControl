import { Router } from "express";
import { TaskController } from "../controller/TaskController";

const taskController = new TaskController();
const taskRoutes = Router();

taskRoutes.post("/create", taskController.create);
taskRoutes.post("/all", taskController.index);

export { taskRoutes };
