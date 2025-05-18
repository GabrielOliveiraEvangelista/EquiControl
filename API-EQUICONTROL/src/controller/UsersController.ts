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
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const { data } = await fetchAnimaisDoProprietario(req.abqmToken);
    data.forEach(async (item: Animal) => {
      const infoAnimal = await fetchAnimalPorNomeRegistro(
        item.registro,
        req.abqmToken
      );
      const genealogy = await getGenealogy(item.id_animal, req.abqmToken);
      console.log(genealogy);
    });
    if (!user) {
      const dataOwner = await getToken(email, senha);
      const nome = dataOwner.fields.nome_pessoa;
      await prisma.user.create({
        data: { email, nome, senha },
      });
    }
    // VERIFICAR SE JA TEM ESSE EMAIL CADASTRADO NO MEU BANCO
    // SE NÂO TIVER É NECESSARIO GRAVAR INFO DO USER, ANIMAL E GENEALOGIA
    res.json("Criado");
  }
}
