import { generate } from "gerador-validador-cpf";

export default function createCpfFactory() {
  return {
    cpf: generate(),
  };
}
