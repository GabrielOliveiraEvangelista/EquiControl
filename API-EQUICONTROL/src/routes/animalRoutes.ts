import { Router } from 'express';
import { AnimalController } from '../controller/AnimalController';

const animalController = new AnimalController()
const animalRoutes = Router();

animalRoutes.get('/owner', animalController.index);
animalRoutes.get('/registration/:strings', animalController.show);

export { animalRoutes };
