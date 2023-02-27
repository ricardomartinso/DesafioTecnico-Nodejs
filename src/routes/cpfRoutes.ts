import express from "express";
import {
  getAllRestrictedCpf,
  createRestrictedCpf,
  deleteRestrictedCpf,
  getRestrictedCpf,
} from "../controllers/cpfController.js";
import { isValidCpfMiddleware } from "../middlewares/isValidCpfMiddleware.js";

export const router = express.Router();

router.get("/cpf", getAllRestrictedCpf);
router.get("/cpf/:cpf", isValidCpfMiddleware, getRestrictedCpf);
router.post("/cpf", isValidCpfMiddleware, createRestrictedCpf);
router.delete("/cpf/:cpf", isValidCpfMiddleware, deleteRestrictedCpf);
