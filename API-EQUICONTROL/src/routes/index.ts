import { Router } from "express";
import { animalRoutes } from "./animalRoutes";
import { usersRoutes } from "./usersRoutes";
import { taskRoutes } from "./taskRoutes";

const routes = Router();

routes.use("/animal", animalRoutes);
routes.use("/users", usersRoutes);
routes.use("/task", taskRoutes);

export { routes };
