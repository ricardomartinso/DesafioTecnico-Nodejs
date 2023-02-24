import express from "express";
import {
  getAllRestrictedCpf,
  createRestrictedCpf,
  deleteRestrictedCpf,
  getRestrictedCpf,
} from "../controllers/cpfController";
import { isValidCpfMiddleware } from "../middlewares/isValidCpfMiddleware";

export const router = express.Router();

router.get("/cpf/{cpf}", getRestrictedCpf);
router.get("/cpf", getAllRestrictedCpf);
router.post("/cpf", isValidCpfMiddleware, createRestrictedCpf);
router.delete("/cpf/{cpf}", deleteRestrictedCpf);
