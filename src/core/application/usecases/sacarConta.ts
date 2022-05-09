import { ContaCorrente } from "../../domain/entities/ContaCorrente";

export class sacarConta {
  constructor(){}

  async execute(conta: ContaCorrente, ValorDoSaque: number) {
    return conta.sacarDinheiro(ValorDoSaque)
  }
}