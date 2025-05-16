// search/genealogySearch.js
import axios from 'axios';
import { env } from '../types/env';

export async function getGenealogy(idAnimal:number, token:string) {
  
  const { data } = await axios.post(
    env.ABQM_API_GENEALOGIA,
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
