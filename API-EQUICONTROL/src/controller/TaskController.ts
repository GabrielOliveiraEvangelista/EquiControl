import { Request, Response } from "express";
import { prisma } from "../database/prisma";

export class TaskController {
  async create(req: Request, res: Response) {
    const { date, animalId, title, ...jsonReq } = req.body;
    const tasks = await prisma.task.findMany({
      where: {
        animalId: animalId,
      },
    });
    const duplicate = tasks.filter((item) => {
      return item.title === title;
    });
    if (tasks.length === 0 || duplicate.length === 0) {
      await prisma.task.create({
        data: { date, title, animalId, ...jsonReq },
      });
      res.json("TAREFA CRIADA");
    } else {
      res.json("JA EXISTE ESSA TAREFA PARA ESSE ANIMAL");
    }
  }
  async index(req: Request, res: Response) {
    const taskTable = await prisma.task.findMany();
    res.json(taskTable);
  }
}
