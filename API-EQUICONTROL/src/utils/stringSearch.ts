import axios from 'axios';
import 'dotenv/config';
import { AppError } from './AppError';

export async function fetchAnimalPorNomeRegistro(termo: string, token: string) {
  async function getAnimalByString(termo: string, token: string) {
    const payload = {
      parametro: termo,
      tipo_pessoa: 'pf',
      tipoAnimal: 1,
    };
    const { ABQM_API_CONSULTA_STRING } = process.env;
    if (!ABQM_API_CONSULTA_STRING) {
      throw new AppError(
        'Verifique a variavel ABQM_CONSULTA_POR_PROPRIEDADE tem algo de errado com ela !'
      );
    }
    const { data } = await axios.post(ABQM_API_CONSULTA_STRING, payload, {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json',
      },
    });
    return data.listDto[0];
  }
  async function getAnimalById(idAnimal: number, token: string) {
    const { ABQM_API_CONSULTA } = process.env;
    if (!ABQM_API_CONSULTA) {
      throw new AppError(
        'Verifique a variavel ABQM_CONSULTA_POR_PROPRIEDADE tem algo de errado com ela !'
      );
    }
    const { data } = await axios.post(
      ABQM_API_CONSULTA,
      { id_animal: String(idAnimal) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return data.listDto[0];
  }
  const resultado = await getAnimalByString(termo, token);
  if (!resultado) {
    throw new AppError(
      'Não localizamos esse animal na base de dados, verifique o termo passado para consulta !'
    );
  }
  const id = resultado.id_animal;
  const detalhes = await getAnimalById(id, token);
  return detalhes;
}
