import axios from "axios";
import "dotenv/config";
import { AppError } from "./AppError";
import { env } from "../types/env";

export async function fetchAnimalPorNomeRegistro(termo: string, token: string) {
  async function getAnimalByString(termo: string, token: string) {
    const payload = {
      parametro: termo,
      tipo_pessoa: "pf",
      tipoAnimal: 1,
    };
    const { data } = await axios.post(env.ABQM_API_CONSULTA_STRING, payload, {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
    });
    return data.listDto[0];
  }
  async function getAnimalById(idAnimal: number, token: string) {
    const { data } = await axios.post(
      env.ABQM_API_CONSULTA,
      { id_animal: String(idAnimal) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return data.listDto[0];
  }
  const resultado = await getAnimalByString(termo, token);
  if (!resultado) {
    throw new AppError(
      "Não localizamos esse animal na base de dados, verifique o termo passado para consulta !"
    );
  }
  const id = resultado.id_animal;
  const detalhes = await getAnimalById(id, token);
  const {
    id_cobertura,
    sufixo_nome_animal,
    dt_alteracao,
    id_pai,
    nome_pai,
    registro_pai,
    id_mae,
    nome_mae,
    registro_mae,
    tipificacao_sanguinea,
    DNA_LINK,
    hypp,
    hypp_string,
    five_panel,
    motivo_castracao,
    path_fotos,
    nro_chip,
    qtd_chip,
    dt_implantacao,
    alienado,
    arrendado,
    chave,
    dt_fim_temp_transf_emb,
    pk_imagem,
    placa,
    pdf,
    artigo_43,
    resenha,
    id_resultado_laboratorio,
    imagens,
    acessos,
    situacao_laboratorio,
    impressive,
    num_preregistro,
    dt_importacao,
    dt_inclusao_lancamento,
    dt_inclusao_situacao,
    dt_inclusao,
    dt_envio_doc,
    linkchip,
    id_criador,
    id_proprietario,
    id_laboratorio,
    exibe_laudo,
    acesso_laboratorio,
    situacao_esportes,
    hall_da_fama,
    hall_da_fama_pessoa,
    ...rest
  } = detalhes;
  return rest;
}
