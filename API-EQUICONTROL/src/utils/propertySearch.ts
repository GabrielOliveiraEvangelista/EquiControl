import axios from 'axios';
import { AppError } from './AppError';

export async function fetchAnimaisDoProprietario(token: string) {
  const { ABQM_CONSULTA_POR_PROPRIEDADE } = process.env;
  if (!ABQM_CONSULTA_POR_PROPRIEDADE) {
    throw new AppError(
      'Verifique a variavel ABQM_CONSULTA_POR_PROPRIEDADE, propavelmente esta vazia ou sem declarar'
    );
  }
  const params = {
    sexo: '',
    obito: 0,
    propriedade: 1,
    pagina: 1,
    tamanho_pag: 5000,
    ativo_studbook: 1,
  };
  const { data } = await axios.get(ABQM_CONSULTA_POR_PROPRIEDADE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  });
  if (data.total === 0) {
    throw new AppError(
      'Não foi possivel localizar dados com esses parametros, verifique !'
    );
  }
  return data;
}
