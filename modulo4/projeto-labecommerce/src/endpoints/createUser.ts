import { Response, Request, response } from "express";
import { connection } from "../data/connection";
import { user } from "../data/types";
import { uuid } from "uuidv4";
import { emailRegex } from "../data/constants";

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Verifique se todos os campos foram preenchidos");
    }
    if (!emailRegex.test(email)) {
      response.statusCode = 400;
      throw new Error("Email inválido");
    }
    const id = uuid();
    const user: user = { id, name, email, password };
    await connection("labecommerce_users").insert(user);
    res.status(201).send({ message: "Usuario criado" });
  } catch (error: any) {
    res.status(response.statusCode || 500).send(
      (error.sqlMessage && {
        message: "O email informado já foi cadastrado",
      }) || {
        message: error.message,
      }
    );
  }
}
