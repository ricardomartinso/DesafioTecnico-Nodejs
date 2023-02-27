/*
  Warnings:

  - You are about to drop the `restricteds_cpfs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "restricteds_cpfs";

-- CreateTable
CREATE TABLE "restricted_cpfs" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restricted_cpfs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restricted_cpfs_cpf_key" ON "restricted_cpfs"("cpf");
