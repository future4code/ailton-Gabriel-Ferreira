import express, { Express, response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./data/knex";
import { newTask, user } from "./types";

const app: Express = express();

app.use(express.json());
app.use(cors());

// 1- http://localhost:3003/users

app.post("/users", async (req, res) => {
  const { name, nickname, email } = req.body;
  try {
    // Verificações

    if (!name || !nickname || !email) {
      response.statusCode = 400;
      throw new Error("Verifique se há campos vazios");
    }

    if (
      typeof name !== "string" ||
      typeof nickname !== "string" ||
      typeof email !== "string"
    ) {
      response.statusCode = 400;
      throw new Error(
        "Verifique se todos os campos foram preenchidos corretamente"
      );
    }

    if (!email.includes("@") || !email.includes(".com")) {
      response.statusCode = 400;
      throw new Error("Email inválido");
    }

    // Caso não haja erros

    await connection.raw(`
        INSERT INTO Todo_list_users (name,nickname,email)
        VALUES("${name}","${nickname}","${email}"
        );
        `);

    res.status(201).send("Usuario criado");
  } catch (error: any) {
    if (error.sqlMessage.includes("Duplicate")) {
      res.status(400).send("O usuario ja foi cadastrado");
    } else {
      res.status(response.statusCode || 500).send(error.message);
    }
  }
});

// 2- http://localhost:3003/users/:id

app.get("/users/:id", async (req, res) => {
  const idUser = Number(req.params.id);

  try {
    // Verificações

    if (isNaN(idUser)) {
      response.statusCode = 400;
      throw new Error("Id inválido");
    }
    const user = await connection("Todo_list_users").where("id", idUser);

    // Caso o usuario não seja encontrado

    if (user[0] === undefined) {
      response.statusCode = 404;
      throw new Error("Usuario não encontrado");
    }

    // Caso não haja erros

    const { id, name, nickname, email } = user[0];
    const newUser: user = {
      id,
      name,
      nickname,
      email,
    };

    res.status(200).send(newUser);
  } catch (error: any) {
    res.status(response.statusCode || 500).send(error.message);
  }
});

// 3- 

app.put("/users/edit/:id", async (req, res) => {
  const { name, nickname, email } = req.body;
  const idUser = Number(req.params.id);
  try {
    if (isNaN(idUser)) {
      response.statusCode = 400;
      throw new Error("Id inválido");
    }
    if(!name || !nickname || !email) {
        response.statusCode = 400;
        throw new Error("Verifique se todos os campos foram preenchidos");        
    }
    await connection("Todo_list_users")
      .where("id", idUser)
      .update({ name, nickname, email });

      res.status(200).send('Dados atualizados')
  } catch (error: any) {
    res.status(response.statusCode || 500).send(error.message);
  }
});

app.post("/task", async(req,res)=>{
    const newTask = req.body
    const {title,description,limit_date,creatorUserId} = req.body
    const unformatedDate = req.body.limit_date.split("/")
    const formatedDate = `${unformatedDate[2]}-${unformatedDate[1]}-${unformatedDate[0]}`
    newTask.limit_date = formatedDate
    try {
        if(!title || !description || !limit_date || !creatorUserId){
            response.statusCode = 400            
            throw new Error("Verifique se todos os campos foram preenchidos");            
        }
        await connection('Todo_list_task').insert(newTask)
        res.status(201).send('Tarefa criada')
    } catch (error:any) {
        res.status(response.statusCode).send(error.message)        
    }
})

app.get("/task/:id", async(req,res)=>{
    const idTask = Number(req.params.id)
    try {
        if(isNaN(idTask)){
            response.statusCode = 400
            throw new Error("Id inválido");            
        }
        const task = await connection("Todo_list_task").where("id", idTask)
        res.status(200).send(task)
    } catch (error:any) {
        res.status( response.statusCode || 500).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
