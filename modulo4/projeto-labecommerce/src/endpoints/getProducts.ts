import { Response, Request, response } from "express";
import { connection } from "../data/connection";

export async function getProducts(req: Request, res: Response) {
  try {
    console.log(req.query.product);
    let name = req.query.product;
    let order = req.query.order;
    if (!name) {
      name = "";
    }
    let result;
    if (order) {
      result = await connection("labecommerce_products")
        .where("name", "like", `%${name}%`)
        .orderBy("name", `${order}`);
    } else {
      result = await connection("labecommerce_products");
    }
    res.status(200).send(result);
  } catch (error: any) {
    res.status(response.statusCode || 500).send({ message: error.message });
  }
}
