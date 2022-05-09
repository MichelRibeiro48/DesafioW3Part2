import { Cliente } from "./Cliente"

export class LogDeTransacoes {
  constructor(
    private codigoTransacao: string,
    private numeroAgencia: string,
    private tipoMovimentacao: string,
    private CodContaCorrente: string,
    private valorMovimento: number,
    private dataMovimentacao?: Date,
  ){}
}