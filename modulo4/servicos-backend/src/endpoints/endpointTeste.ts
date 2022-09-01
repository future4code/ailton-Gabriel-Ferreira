import { Request, Response } from "express";
import { connection } from "../connection";

export async function endpointTeste(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const testeDB = await connection("Actor");
    console.log(testeDB);
    res.send(testeDB);
  } catch (error: any) {
    res.send({ message: error.message });
  }
}
