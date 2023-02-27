import supertest from "supertest";
import { app } from "../app.js";
import createCpfFactory from "./factory/cpfFactory.js";
import moment from "moment";
import { prisma } from "../config/database.js";

beforeEach(async () => {
  await prisma.restrictedCpf.deleteMany();
});
afterAll(async () => {
  await prisma.$disconnect();
});
describe("Adicionar CPF na lista restrita", () => {
  it("Deve ser adicionado um CPF válido na lista", async () => {
    const generatedCpf = createCpfFactory();

    const result = await supertest(app).post("/cpf").send(generatedCpf);

    expect(result.statusCode).toEqual(201);
  });

  it("Se o CPF for inválido deve retornar a exceção do tipo 'InvalidCpfException'", async () => {
    const invalidCPF = "00000000000";

    const result = await supertest(app).post("/cpf").send(invalidCPF);

    expect(result.text).toEqual(
      '{"type":"InvalidCpfException","message":"CPF is not valid."}'
    );
    expect(result.statusCode).toEqual(400);
  });

  it("Se um CPF existir na lista deve retornar a exceção do tipo 'ExistsCpfException'", async () => {
    const { cpf } = createCpfFactory();

    await supertest(app).post("/cpf").send({ cpf });

    const result = await supertest(app).post("/cpf").send({ cpf });
    console.log(result.text);

    expect(result.text).toEqual(
      '{"type":"ExistsCpfException","message":"CPF already exist."}'
    );
    expect(result.statusCode).toEqual(409);
  });
});

describe("Verificar se um determinado CPF está na lista restrita", () => {
  it("Se um CPF existir deve retornar o CPF e a data de criação (createdAt) no formato ISO 8601", async () => {
    const { cpf } = createCpfFactory();

    await supertest(app).post("/cpf").send({ cpf });

    const result = await supertest(app).get(`/cpf/${cpf}`);

    const verifyCorrectDate = moment.utc(
      result.body.createdAt,
      moment.ISO_8601,
      true
    );

    expect(verifyCorrectDate.utcOffset()).toBe(0);
    expect(result.body.cpf).toEqual(cpf);
    expect(result.statusCode).toEqual(200);
  });
  it("Se o CPF não existir deve retornar uma exceção do tipo NotFoundCpfException.", async () => {
    const { cpf } = createCpfFactory();

    const result = await supertest(app).get(`/cpf/${cpf}`);

    expect(result.text).toEqual(
      '{"type":"NotFoundCpfException","message":"CPF does not exist."}'
    );
    expect(result.statusCode).toEqual(404);
  });
  it("Se o CPF for inválido deve retornar a exceção do tipo InvalidCpfException.", async () => {
    const invalidCpf = "023";

    const result = await supertest(app).get(`/cpf/${invalidCpf}`);

    expect(result.text).toEqual(
      '{"type":"InvalidCpfException","message":"CPF is not valid."}'
    );
    expect(result.statusCode).toEqual(400);
  });
});

describe("Remover um CPF da lista restrita", () => {
  it("Se o CPF não existir deve retornar uma exceção do tipo NotFoundCpfException", async () => {
    const { cpf } = createCpfFactory();

    const result = await supertest(app).delete(`/cpf/${cpf}`);

    expect(result.text).toEqual(
      '{"type":"NotFoundCpfException","message":"CPF does not exist."}'
    );
    expect(result.statusCode).toEqual(404);
  });
  it("Se o CPF for inválido deve retornar a exceção do tipo InvalidCpfException.", async () => {
    const invalidCpf = "20301245410";

    const result = await supertest(app).delete(`/cpf/${invalidCpf}`);

    expect(result.text).toEqual(
      '{"type":"InvalidCpfException","message":"CPF is not valid."}'
    );
    expect(result.statusCode).toEqual(400);
  });
});

describe("Visualizar todos os CPFs que estão na lista restrita", () => {
  it("Se nenhum CPF existir na lista deve retornar um array vazio.", async () => {
    const result = await supertest(app).get("/cpf");

    expect(result.body.length).toEqual(0);
    expect(result.statusCode).toEqual(200);
  });
});
