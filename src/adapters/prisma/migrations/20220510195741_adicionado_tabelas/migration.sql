-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agencia" (
    "numero" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Agencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContaCorrente" (
    "saldo" DECIMAL(65,30) NOT NULL,
    "numero" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "agenciaId" TEXT NOT NULL,

    CONSTRAINT "ContaCorrente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogDeTransacoes" (
    "codigoTransacao" TEXT NOT NULL,
    "numeroAgencia" TEXT NOT NULL,
    "tipoMovimentacao" TEXT NOT NULL,
    "codContaCorrente" TEXT NOT NULL,
    "valorMovimentacao" DECIMAL(65,30) NOT NULL,
    "dataMovimentacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LogDeTransacoes_pkey" PRIMARY KEY ("codigoTransacao")
);

-- CreateTable
CREATE TABLE "Transacoes" (
    "CodTransacao" TEXT NOT NULL,

    CONSTRAINT "Transacoes_pkey" PRIMARY KEY ("CodTransacao")
);

-- AddForeignKey
ALTER TABLE "ContaCorrente" ADD CONSTRAINT "ContaCorrente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContaCorrente" ADD CONSTRAINT "ContaCorrente_agenciaId_fkey" FOREIGN KEY ("agenciaId") REFERENCES "Agencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
