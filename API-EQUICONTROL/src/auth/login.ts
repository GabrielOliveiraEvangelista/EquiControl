import axios from "axios";
import { env } from "../types/env";

export async function getToken() {
  const { data } = await axios.post(env.ABQM_API_LOGIN, {
    usuario: env.ABQM_USUARIO,
    senha: env.ABQM_SENHA,
  });
  return data.fields.token;
}
