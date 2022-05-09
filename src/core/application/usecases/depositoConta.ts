import { ContaCorrente } from "../../domain/entities/ContaCorrente";

export class depositoConta {
  constructor(){}
  
  async execute(conta: ContaCorrente, ValorDeposito: number) {
    return conta.depositarDinheiro(ValorDeposito);
  }
}