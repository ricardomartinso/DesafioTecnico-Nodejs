/*
  Warnings:

  - You are about to drop the `RestrictedCpf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RestrictedCpf";

-- CreateTable
CREATE TABLE "restricteds_cpfs" (
    "id" SERIAL NOT NULL,
    "cpf" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restricteds_cpfs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restricteds_cpfs_cpf_key" ON "restricteds_cpfs"("cpf");
