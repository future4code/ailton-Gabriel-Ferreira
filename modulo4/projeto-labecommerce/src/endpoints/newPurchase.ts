import { Response, Request, response } from "express";
import { uuid } from "uuidv4";
import { connection } from "../data/connection";
import { getPrice } from "../data/functions";
import { purchase } from "../data/types";

export async function newPurchase(req: Request, res: Response) {
  try {
    const id = uuid();
    const { user_id, product_id, quantity } = req.body;
    if (!user_id || !product_id || !quantity) {
      response.statusCode = 400;
      throw new Error("Verifique se todos os campos foram preenchidos");
    }
    const price = await getPrice(product_id);
    const total_price = quantity * price;
    const purchase: purchase = {
      id,
      user_id,
      product_id,
      quantity,
      total_price,
    };
    await connection("labecommerce_purchases").insert(purchase);
    res.status(200).send({ message: "Compra realizada" });
  } catch (error: any) {
    if (error.sqlMessage.includes("a foreign key constraint fails")) {
      response.statusCode = 400;
    }
    res.status(response.statusCode || 500).send(
      (error.sqlMessage.includes("a foreign key constraint fails") && {
        message: "Id de usuario ou produto não econtrado",
      }) || {
        message: error.message,
      }
    );
  }
}
