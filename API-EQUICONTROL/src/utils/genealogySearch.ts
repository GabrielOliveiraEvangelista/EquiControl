// search/genealogySearch.js
import axios from "axios";
import { env } from "../types/env";

export async function getGenealogy(idAnimal: number, token: string) {
  const { data } = await axios.post(
    env.ABQM_API_GENEALOGIA,
    { id_animal: String(idAnimal) }, // payload real
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const {
    id_animal,
    nome_animal,
    registro_abqm,
    registro_original,
    pelagem,
    hypp,
    impressive,
    ...resto
  } = data.listDto?.[0];
  return resto;
}
