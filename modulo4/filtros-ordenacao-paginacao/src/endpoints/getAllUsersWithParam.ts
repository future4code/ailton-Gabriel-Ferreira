import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let name = req.query.name;

    if (!name || typeof name !== "string") {
      name = "";
    }

    const users = await selectAllUsers(name);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export default async function selectAllUsers(name: string): Promise<any> {
  const result = await connection("aula48_exercicio").where(
    "name",
    "like",
    `%${name}%`
  );

  return result;
}
