import { Request, Response } from "express";
import { fetchAnimaisDoProprietario } from "../utils/propertySearch";
import { prisma } from "../database/prisma";
import { getToken } from "../auth/login";
import { fetchAnimalPorNomeRegistro } from "../utils/stringSearch";
import { getGenealogy } from "../utils/genealogySearch";

interface Animal {
  indice: number;
  id_animal: number;
  certificado_registro: string;
  registro: string;
  nome: string;
  sexo: string;
  pelagem: string;
  sangue: string;
  data_nascimento: string;
  ativo_studbook: number;
  ativo_sports: number;
  castrado: number;
  obito: number;
  img_animal: string | null;
  obs_impressao: string;
  permite_impressao: boolean;
}

export class UsersController {
  async create(req: Request, res: Response) {
    const { email, senha } = req.body;
    const { data } = await fetchAnimaisDoProprietario(req.abqmToken);
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      const dataOwner = await getToken(email, senha);
      const nome = dataOwner.fields.nome_pessoa;
      await prisma.user.create({
        data: { email, nome, senha },
      });
      data.forEach(async (item: Animal) => {
        const infoAnimal = await fetchAnimalPorNomeRegistro(
          item.registro,
          req.abqmToken
        );
        const userId = await prisma.user.findUnique({
          where: {
            email: email,
          },
          select: {
            id: true,
          },
        });
        if (!userId) {
          return;
        }
        const userIdNumber = userId.id;
        await prisma.animal.create({
          data: {
            ...infoAnimal,
            userId: userIdNumber,
          },
        });
        const animalId = await prisma.animal.findFirst({
          orderBy: { id: "desc" },
          select: { id: true },
        });
        const dataGenealogy = await getGenealogy(item.id_animal, req.abqmToken);
        if (!animalId) {
          return;
        }
        const {
          id_animal,
          nome_animal,
          registro_abqm,
          registro_original,
          pelagem,
          hypp,
          impressive,
          ...resto
        } = dataGenealogy;
        await prisma.animalAncestral.create({
          data: {
            ...resto,
            animalId: animalId.id,
          },
        });
      });
      res.json("Informações de usuario, animal e genealogia gravadas com sucesso")
    }
    res.json("Usuario ja existente");
  }
}
