import { Cliente } from "./Cliente"

class Banco {
  constructor(
    private cliente: Cliente,
    private nomeBanco: string,
  ) {}
}