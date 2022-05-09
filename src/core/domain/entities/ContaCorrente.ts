import { Cliente } from "./Cliente"

export class ContaCorrente {
  constructor(
    private cliente: Cliente,
    private agencia: string,
    private saldo: number,
    private numero: string,
    private id: number,
  ){}
  getSaldo() {
    return this.saldo;
  }
}