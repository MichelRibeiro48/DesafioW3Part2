import { Agencia } from "../../domain/entities/Agencia";


export interface IAcharAgencia {
  acharPorNumeroAgencia(numeroAgencia: string): Promise<Agencia | null>
}