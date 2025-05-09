import { Router } from "express";
import { animalRoutes } from "./animalRoutes";

const routes = Router()

routes.use('/animal', animalRoutes)

export {routes}