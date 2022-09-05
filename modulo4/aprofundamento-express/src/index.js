"use strict";
// no index.ts:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
let todoArray = [
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
    const boolean = req.body.boolean;
    res.send(todoArray.filter(({ completed }) => {
        return completed === boolean;
    }));
});
app.post("/createTask", (req, res) => {
    const newTask = Object.assign(Object.assign({}, req.body), { id: todoArray.length + 1 });
    todoArray.push(newTask);
    res.send(todoArray);
});
app.put("/editTask/:id", (req, res) => {
    const taskToEdit = todoArray.find((task) => {
        return task.id === Number(req.params.id);
    });
    console.log(todoArray.indexOf(taskToEdit));
    const taskEdited = Object.assign(Object.assign({}, taskToEdit), { completed: req.body.boolean });
    // res.send(taskEdited)
});
