import { Request, Response } from "express";
import { fetchAnimaisDoProprietario } from "../utils/propertySearch";
import { fetchAnimalPorNomeRegistro } from "../utils/stringSearch";
import { getGenealogy } from "../utils/genealogySearch";

export class AnimalController {
  async index(req: Request, res: Response) {
    const list = await fetchAnimaisDoProprietario(req.abqmToken);
    res.json(list);
  }
  async show(req: Request, res: Response) {
    const { strings } = req.params;
    const list = await fetchAnimalPorNomeRegistro(strings, req.abqmToken);
    const genealogy = await getGenealogy(list.id_animal, req.abqmToken);
    res.json(list);
  }
}
