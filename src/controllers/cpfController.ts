import { Request, Response } from "express";

export async function createRestrictedCpf(req: Request, res: Response) {
  return res.sendStatus(201);
}

export async function getRestrictedCpf(req: Request, res: Response) {}

export async function deleteRestrictedCpf(req: Request, res: Response) {}

export async function getAllRestrictedCpf(req: Request, res: Response) {}
