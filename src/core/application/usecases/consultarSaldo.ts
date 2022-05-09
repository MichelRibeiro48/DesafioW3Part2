import { ContaCorrente } from "../../domain/entities/ContaCorrente";
import { IAcharConta } from "../repositories/IAcharConta";



class consultarSaldo {
  constructor(private acharConta: IAcharConta){}

  async execute(numeroConta: string, numeroAgencia: string) {
    const conta = await this.acharConta.acharPorNumeroEAgencia(numeroConta,numeroAgencia)
    if (conta === null) throw new Error("conta inexistente")
    return conta.getSaldo();
  }
}