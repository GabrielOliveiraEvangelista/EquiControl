// search/genealogySearch.js
import axios from 'axios';
import 'dotenv/config';
import { AppError } from './AppError';

const { ABQM_API_GENEALOGIA } = process.env;

export async function getGenealogy(idAnimal:number, token:string) {
  if (!ABQM_API_GENEALOGIA) {
    throw new AppError(
      'Verifique a variavel ABQM_API_GENEALOGIA, propavelmente esta vazia ou sem declarar'
    );
  }
  const { data } = await axios.post(
    ABQM_API_GENEALOGIA,
    { id_animal: String(idAnimal) }, // payload real
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return data.listDto?.[0] ?? null;
}
