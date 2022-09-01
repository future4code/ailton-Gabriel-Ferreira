import { Request, response, Response } from "express";
import { connection } from "../connection";
import { getCpfFunc } from "../services/getCpf";

export async function getCpf(req: Request, res: Response): Promise<void> {
  const { cpf } = req.params;
  const { complemento, numero } = req.body;
  try {
    if (!cpf) {
      response.statusCode = 500;
      throw new Error("Ocorreu um erro");
    }
    const result = await getCpfFunc(cpf);
    if (!result) {
      response.statusCode = 404;
      throw new Error("Endereço não encontrado");
    }
    console.log(result);
    const { cep, logradouro, bairro, localidade, uf } = result;
    const newAdress = {
      cep,
      logradouro,
      bairro,
      cidade: localidade,
      estado: uf,
      complemento,
      numero,
    };
    await connection("Adress").insert(newAdress);
    res.status(201).send({ message: "Endereço cadastrado" });
  } catch (error: any) {
    res.status(response.statusCode || 500).send({ message: error.message });
  }
}
