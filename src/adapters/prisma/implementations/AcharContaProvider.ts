import { prismaClient } from "../prismaclient"
import { IAcharConta } from "../../../core/application/repositories/IAcharConta"
import { ContaCorrente } from "../../../core/domain/entities/ContaCorrente";
import { AcharAgenciaProvider } from "./AcharAgenciaProvider"
import { Cliente } from "../../../core/domain/entities/Cliente";

export class AcharContaProvider implements IAcharConta {
  async acharPorNumeroEAgencia(numeroConta: string, numeroAgencia: string): Promise<ContaCorrente | null> {
    const Agencia = await new AcharAgenciaProvider().acharPorNumeroAgencia(numeroAgencia)
    const conta = await prismaClient.contaCorrente.findFirst({
      where: {
        numero: numeroConta,
        agencia: {numero: numeroAgencia}
        
      }
    })
    const clientePrisma = await prismaClient.cliente.findFirst({
      where: {
        id: conta?.clienteId
      }
    })
    if (!Agencia) throw new Error ("Agencia nao existe")
    if (!clientePrisma) throw new Error("Cliente nao existe")
    const cliente = new Cliente(clientePrisma.id, clientePrisma.nome)
    if (conta) return new ContaCorrente(cliente,Agencia,Number(conta.saldo), conta.numero, conta.id)

    else throw new Error("Conta Inexistente")
  }
}