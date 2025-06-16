import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { string } from "zod/v4";

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
    const { date } = req.body;
    const dateAtual = new Date(date);
    const nextDate = new Date(dateAtual);
    nextDate.setDate(dateAtual.getDate() + 1);

    const groupedTasks = await prisma.task.groupBy({
      by: ["title"],
      where: {
        date: {
          gte: dateAtual,
          lt: nextDate,
        },
      },
      _count: {
        animalId: true,
      },
    });
    const result = groupedTasks.map((item) => ({
      task: item.title,
      qtdAnimals: item._count.animalId,
    }));

    res.json(result);
  }
}
