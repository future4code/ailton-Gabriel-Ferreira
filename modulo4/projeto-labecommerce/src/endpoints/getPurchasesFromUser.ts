import { Response, Request, response } from "express";
import { connection } from "../data/connection";

export async function getPurchasesFromUser(req: Request, res: Response) {
  try {
    const { user_id } = req.params;
    const user = await connection("labecommerce_users").where("id", user_id);
    if (!user.length) {
      response.statusCode = 404;
      throw new Error("Id de usuario inválido");
    }
    const result = await connection("labecommerce_purchases").where(
      "user_id",
      user_id
    );
    res.status(200).send(result);
  } catch (error: any) {
    res.status(response.statusCode || 500).send({ message: error.message });
  }
}
