import { Agencia } from "./Agencia";
import { Cliente } from "./Cliente"

export class ContaCorrente {
  constructor(
    private cliente: Cliente,
    private agencia: Agencia,
    private saldo: number,
    private numero: string,
    private id: number,
  ){}
  pegarSaldo() {
    return this.saldo;
  }
  depositarDinheiro(value: number) {
    this.saldo += value
  }
  sacarDinheiro(value: number) {
    if (this.saldo <= value) throw new Error("Saldo insuficiente")
    this.saldo -= value
  }
}