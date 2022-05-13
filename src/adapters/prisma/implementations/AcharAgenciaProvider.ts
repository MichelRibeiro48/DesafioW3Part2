import { IAcharAgencia } from "../../../core/application/repositories/IAcharAgencia"
import { Agencia } from "../../../core/domain/entities/Agencia"
import { prismaClient } from "../prismaclient"

export class AcharAgenciaProvider implements IAcharAgencia {
  async acharPorNumeroAgencia(numeroAgencia: string): Promise<Agencia | null> {
    const agencia = await prismaClient.agencia.findFirst({
      where: {
        numero: numeroAgencia
      }
    })
    if (agencia) return new Agencia(agencia.numero, agencia.id, agencia.nome)

    else throw new Error("Agencia inexistente");
  }
}