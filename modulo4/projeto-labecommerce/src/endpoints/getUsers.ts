import { Response, Request, response } from "express";
import { connection } from "../data/connection";

export async function getUsers(req: Request, res: Response) {
  try {
    const result = await connection("labecommerce_users");
    res.status(200).send(result);
  } catch (error: any) {
    res.status(response.statusCode || 500).send({ message: error.message });
  }
}
