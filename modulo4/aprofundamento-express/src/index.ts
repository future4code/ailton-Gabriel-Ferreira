// no index.ts:

import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

type todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

let todoArray: todo[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
];

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/todo", (req, res) => {
  const { boolean } = req.body;
  if (boolean === true || boolean === false) {
    res.send(
      todoArray.filter(({ completed }) => {
        return completed === boolean;
      })
    );
  } else if (boolean === undefined || boolean === null) {
    res.send(todoArray)
  }
   else {
    res.send("Parametro invalido");
  }
});

app.post("/createTask", (req, res) => {
  let newValue = todoArray.at(-1)?.id
  if (newValue === undefined) {
    newValue = 0
  }
  const newTask: todo = { ...req.body, id: newValue+1 };
  todoArray.push(newTask);
  res.send(todoArray);
});

app.put("/editTask/:id", (req, res) => {
  const indexOfTaskToEdit = todoArray.findIndex((task) => {
    return task.id === Number(req.params.id);
  });
  todoArray[indexOfTaskToEdit].completed = req.body.boolean;
  res.send(todoArray);
});

app.delete("/deleteTask/:id", (req, res) => {
  const newArr = todoArray.filter(({ id }) => {
    return id !== Number(req.params.id);
  });
  todoArray = newArr;
  res.send(todoArray);
});

app.get("/getUserTasks/:userId", (req,res)=>{
    const newArr = todoArray.filter(data=>{
        return data.userId === Number(req.params.userId)
    })
    res.send(newArr)
})
