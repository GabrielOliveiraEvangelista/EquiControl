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

    hypp_pai,
    impressive_pai,

    hypp_mae,
    impressive_mae,

    hypp_pai_1,
    impressive_pai_1,
    hypp_mae_1,
    impressive_mae_1,

    hypp_pai_2,
    impressive_pai_2,
    hypp_mae_2,
    impressive_mae_2,

    hypp_pai_3,
    impressive_pai_3,
    hypp_mae_3,
    impressive_mae_3,

    hypp_pai_4,
    impressive_pai_4,
    hypp_mae_4,
    impressive_mae_4,

    hypp_pai_5,
    impressive_pai_5,
    hypp_mae_5,
    impressive_mae_5,

    hypp_pai_6,
    impressive_pai_6,
    hypp_mae_6,
    impressive_mae_6,

    hypp_pai_7,
    impressive_pai_7,
    hypp_mae_7,
    impressive_mae_7,

    hypp_pai_8,
    impressive_pai_8,
    hypp_mae_8,
    impressive_mae_8,

    hypp_pai_9,
    impressive_pai_9,
    hypp_mae_9,
    impressive_mae_9,

    hypp_pai_10,
    impressive_pai_10,
    hypp_mae_10,
    impressive_mae_10,

    hypp_pai_11,
    impressive_pai_11,
    hypp_mae_11,
    impressive_mae_11,

    hypp_pai_12,
    impressive_pai_12,
    hypp_mae_12,
    impressive_mae_12,

    hypp_pai_13,
    impressive_pai_13,
    hypp_mae_13,
    impressive_mae_13,

    hypp_pai_14,
    impressive_pai_14,
    hypp_mae_14,
    impressive_mae_14,

    ...rest
  } = data.listDto?.[0];

  return rest;
}
