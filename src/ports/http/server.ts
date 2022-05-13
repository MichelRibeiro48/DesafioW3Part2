import express, { Request, Response } from "express";
import { AcharAgenciaProvider } from "../../adapters/prisma/implementations/AcharAgenciaProvider";
import { AcharContaProvider } from "../../adapters/prisma/implementations/AcharContaProvider";

const app = express();

app.use(express.json())

app.get('/ChecarSaldo', async (req: Request, res: Response) => {
  const novaConta = new AcharContaProvider()
  const cliente = await novaConta.acharPorNumeroEAgencia("12341234", "123456")
  res.send(cliente).status(302)
})

app.listen(3333)
