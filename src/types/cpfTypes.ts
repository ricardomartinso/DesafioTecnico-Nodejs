import { RestrictedCpf as RestrictedCpfDb } from "@prisma/client";

export type RestrictedCpf = Omit<RestrictedCpfDb, "id" | "createdAt">;
export type RestrictedCpfWithoutId = Omit<RestrictedCpf, "id">;
