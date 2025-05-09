import axios from 'axios';
import 'dotenv/config';
import { AppError } from '../utils/AppError';
import {z} from 'zod'

export async function getToken() {
    const envSchema = z.object({
      ABQM_API_LOGIN: z.string(),
      ABQM_USUARIO: z.string(),
      ABQM_SENHA: z.string()
    })
    const {ABQM_SENHA, ABQM_API_LOGIN, ABQM_USUARIO} = envSchema.parse(process.env)
    const { data } = await axios.post(ABQM_API_LOGIN, {
      usuario: ABQM_USUARIO,
      senha: ABQM_SENHA,
    });
    return data.fields.token;
}
