import axios from "axios";
import { env } from "../types/env";

export async function getToken(email:string, senha:string) {
  const { data } = await axios.post(env.ABQM_API_LOGIN, {
    usuario: email,
    senha: senha,
  });
  return data;
}
