import { Agencia } from "../../domain/entities/agencia";


export interface IAcharAgencia {
  acharPorNumeroAgencia(numeroAgencia: string): Promise<Agencia | null>
}