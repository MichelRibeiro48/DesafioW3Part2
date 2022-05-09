import { ContaCorrente } from "../../domain/entities/ContaCorrente";

export interface IAcharConta {
  acharPorNumeroEAgencia(numero: string, agencia: string): Promise<ContaCorrente | null>
}