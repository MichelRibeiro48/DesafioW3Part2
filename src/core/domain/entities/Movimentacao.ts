import { Cliente } from "./Cliente"

export class Movimentacao {
  constructor(
    private cliente: Cliente,
    private tipoMovimentacao: string,
    private dataMovimentacao: Date,
  ){}
}