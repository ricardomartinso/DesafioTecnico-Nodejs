-- CreateTable
CREATE TABLE "RestrictedCpf" (
    "id" SERIAL NOT NULL,
    "cpf" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RestrictedCpf_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RestrictedCpf_cpf_key" ON "RestrictedCpf"("cpf");
