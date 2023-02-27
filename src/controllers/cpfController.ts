import { Request, Response } from "express";
import {
  createRestrictedCpf as createRestrictedCpfService,
  findAllRestrictedCpf,
  listRestrictedCpf,
  deleteRestrictedCpf as deleteRestrictedCpfService,
} from "../services/cpfServices.js";
import { RestrictedCpf } from "../types/cpfTypes.js";

export async function createRestrictedCpf(req: Request, res: Response) {
  const cpf = req.body as RestrictedCpf;

  await createRestrictedCpfService(cpf);

  return res.sendStatus(201);
}

export async function getRestrictedCpf(req: Request, res: Response) {
  const { cpf } = req.params;

  const cpfAsRestrictedCpf: RestrictedCpf = {
    cpf,
  };

  const restrictedCpf = await listRestrictedCpf(cpfAsRestrictedCpf);

  return res.status(200).send(restrictedCpf);
}

export async function deleteRestrictedCpf(req: Request, res: Response) {
  const { cpf } = req.params;

  const cpfAsRestrictedCpf: RestrictedCpf = {
    cpf,
  };

  await deleteRestrictedCpfService(cpfAsRestrictedCpf);

  return res.sendStatus(200);
}

export async function getAllRestrictedCpf(req: Request, res: Response) {
  const allRestrictedsCpfs = await findAllRestrictedCpf();

  return res.status(200).send(allRestrictedsCpfs);
}
