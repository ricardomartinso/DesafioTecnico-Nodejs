import {
  create,
  deleteCpf,
  findAll,
  findByCpf,
} from "../repositories/cpfRepository.js";
import { RestrictedCpf } from "../types/cpfTypes.js";
import { conflictCpfError, notFoundCpfError } from "../utils/errorUtils.js";

export async function createRestrictedCpf(cpf: RestrictedCpf) {
  const restrictedCpf: RestrictedCpf | null = await findByCpf(cpf);

  if (restrictedCpf) throw conflictCpfError("CPF already exist.");

  await create(cpf);
}

export async function listRestrictedCpf(cpf: RestrictedCpf) {
  const restrictedCpf = await verifyCpfExist(cpf);

  return restrictedCpf;
}

export async function deleteRestrictedCpf(cpf: RestrictedCpf) {
  await verifyCpfExist(cpf);

  await deleteCpf(cpf);
}

export async function findAllRestrictedCpf(): Promise<RestrictedCpf[]> {
  const allRestrictedCpfs = await findAll();

  return allRestrictedCpfs;
}

async function verifyCpfExist(cpf: RestrictedCpf) {
  const restrictedCpf: RestrictedCpf | null = await findByCpf(cpf);

  if (restrictedCpf === null) throw notFoundCpfError("CPF does not exist.");

  return restrictedCpf;
}
