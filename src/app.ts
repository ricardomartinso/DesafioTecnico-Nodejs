import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.js";
import { router } from "./routes/cpfRoutes.js";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(errorHandlerMiddleware);
