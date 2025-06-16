import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { calcularIdade } from "../utils/calcularIdade";

export class AnimalController {
  async index(req: Request, res: Response) {
    const animais = await prisma.animal.findMany({
      select: {
        nome_animal: true,
        dt_nascimento: true,
      },
    });

    const resultado = animais.map((animal) => ({
      name: animal.nome_animal,
      age: calcularIdade(animal.dt_nascimento),
    }));
    res.json(resultado);
  }
  async show(req: Request, res: Response) {
    //PARTE
  }
}
