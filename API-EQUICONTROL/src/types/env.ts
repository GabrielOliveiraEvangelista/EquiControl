import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  ABQM_API_LOGIN: z.string(),
  ABQM_USUARIO: z.string(),
  ABQM_SENHA: z.string(),
  ABQM_API_CONSULTA: z.string(),
  ABQM_API_GENEALOGIA: z.string(),
  ABQM_API_CONSULTA_STRING: z.string(),
  ABQM_CONSULTA_POR_PROPRIEDADE: z.string(),
});

const env = envSchema.parse(process.env);

export { env };
