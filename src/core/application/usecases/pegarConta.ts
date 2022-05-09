import { IAcharAgencia } from "../repositories/IAcharAgencia"
import { IAcharConta } from "../repositories/IAcharConta"

export class pegarConta {
  constructor(private acharAgencia: IAcharAgencia, private acharConta: IAcharConta){}

  async execute(numeroAgencia: string, numeroConta: string){
    const agencia = await this.acharAgencia.acharPorNumeroAgencia(numeroAgencia)
    if (agencia === null) throw new Error("agencia inexistente")
    const conta = await this.acharConta.acharPorNumeroEAgencia(numeroConta,numeroAgencia)
    if (conta === null) throw new Error("conta inexistente")
    return conta
  }
}