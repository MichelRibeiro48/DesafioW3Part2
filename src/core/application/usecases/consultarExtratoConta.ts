import { ContaCorrente } from "../../domain/entities/ContaCorrente";
import { IListaTransacoes } from '../repositories/IListaTransacoes';

export class consultarExtrato {
  constructor(private extrato: IListaTransacoes){}

  async execute(conta: ContaCorrente, dataInicial: Date, dataFinal: Date){
    
    if (dataFinal < dataInicial) throw new Error("Data final deve ser igual ou maior que a Data Inicial")
    
    return this.extrato.gerarExtrato(conta, dataInicial, dataFinal)
  }
}