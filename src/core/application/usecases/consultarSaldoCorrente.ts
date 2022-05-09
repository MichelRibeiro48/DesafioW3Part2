import { ContaCorrente } from "../../domain/entities/ContaCorrente";

export class consultarSaldo {
  constructor(){}

  async execute(conta: ContaCorrente) {
    return conta.pegarSaldo();
  }
}