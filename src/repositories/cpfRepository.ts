import { prisma } from "../config/database.js";
import { RestrictedCpf, RestrictedCpfWithoutId } from "../types/cpfTypes.js";

export async function create({ cpf }: RestrictedCpf) {
  await prisma.restrictedCpf.create({
    data: { cpf },
  });
}

export async function findByCpf({
  cpf,
}: RestrictedCpf): Promise<RestrictedCpfWithoutId | null> {
  return await prisma.restrictedCpf.findUnique({
    where: {
      cpf,
    },
    select: { cpf: true, createdAt: true, id: false },
  });
}

export async function findAll(): Promise<RestrictedCpfWithoutId[]> {
  return await prisma.restrictedCpf.findMany({
    select: { cpf: true, createdAt: true, id: false },
  });
}

export async function deleteCpf({ cpf }: RestrictedCpf) {
  return await prisma.restrictedCpf.delete({
    where: {
      cpf,
    },
  });
}
