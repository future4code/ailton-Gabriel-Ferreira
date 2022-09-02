import { Response, Request, response } from "express";
import { connection } from "../data/connection";
import { product } from "../data/types";
import { uuid } from "uuidv4";
import { urlRegex } from "../data/constants";

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, price, image_url } = req.body;
    if (!name || !price || !image_url) {
      throw new Error("Verifique se todos os campos foram preenchidos");
    }
    if (!urlRegex.test(image_url)) {
      response.statusCode = 400;
      throw new Error("Url inválido");
    }
    const id = uuid();
    const product: product = { id, name, price, image_url };
    await connection("labecommerce_products").insert(product);
    res.status(201).send({ message: "Produto criado" });
  } catch (error: any) {
    res.status(response.statusCode || 500).send(
      (error.sqlMessage && {
        message: "Ocorreu um erro",
      }) || {
        message: error.message,
      }
    );
  }
}
