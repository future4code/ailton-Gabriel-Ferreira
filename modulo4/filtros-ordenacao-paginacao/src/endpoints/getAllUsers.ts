import { Request, response, Response } from "express";
import { connection } from "../data/connection";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  let { page, column, direction } = req.params;
  let { name } = req.query;
  let pageAsNumber = +page;
  try {
    if (!name) {
      name = "";
    }

    if (isNaN(pageAsNumber) || pageAsNumber === 0) {
      response.statusCode = 400;
      throw new Error("Parametro de página inválido");
    }

    if (!column || column === ":column") {
      column = "email";
    }

    if (!direction || direction === ":direction") {
      direction = "asc";
    }

    let result = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)
      .limit(5)
      .offset(pageAsNumber * 5 - 5)
      .orderBy(`${column}`, `${direction}`);

    if (!result.length) {
      response.statusCode = 404;
      throw new Error("Nenhum usuario satisfaz os parametros informados");
    }

    console.log(name, pageAsNumber, column, direction);

    res.status(200).send(result);
  } catch (error: any) {
    res.status(response.statusCode || 500).send(error.message);
  }
};
