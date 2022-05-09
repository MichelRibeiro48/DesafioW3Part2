import { ContaCorrente } from "../../domain/entities/ContaCorrente";
import { LogDeTransacoes } from "../../domain/entities/LogDeTransacoes";

export interface IListaTransacoes {

  gerarExtrato(conta: ContaCorrente, dataInicial: Date, dataFinal: Date): Promise<LogDeTransacoes[]| null>
}