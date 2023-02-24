import supertest from "supertest";
import { app } from "../src/app";
import createCpfFactory from "./factory/cpfFactory";

describe("Verifica a criação de CPF na rota POST /cpf", () => {
  it("Espera receber um CPF válido e retornar 201", async () => {
    const generatedCpf = createCpfFactory();

    const result = await supertest(app).post("/cpf").send(generatedCpf);

    expect(result.statusCode).toEqual(201);
  });

  it("Espera receber um CPF Inválido e retornar 400 BAD REQUEST com um JSON { type: InvalidCpfException, message: CPF is not valid}", async () => {
    const invalidCPF = "00000000000";

    const result = await supertest(app).post("/cpf").send(invalidCPF);

    expect(result.text).toEqual(
      '{"type":"InvalidCpfException","message":"CPF is not valid."}'
    );
  });
});
