import { Router } from "express";
import { animalRoutes } from "./animalRoutes";
import { usersRoutes } from "./usersRoutes";

const routes = Router();

routes.use("/animal", animalRoutes);
routes.use("/users", usersRoutes);

export { routes };
