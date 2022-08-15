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

type person = {
    id:number,
    name:string,
    phone:string,
    email:string,
    website:string
}

type post = {
    id:number,
    title:string,
    body:string,
    userId: number
}

let userArray:person[] = [
    {
        id: 1,
        name:'gabriel',
        phone: '21932',
        email: 'asds@asdas.com',
        website: 'www.sadasd.com'
    },
    {
        id: 2,
        name:'joao',
        phone: '219322313',
        email: 'asdsdsafa@asdaasds.com',
        website: 'www.sadasasdasdd.com'
    },
    {
        id: 3,
        name:'jeferson',
        phone: '219322313',
        email: 'asdsdsafa@asdaasds.com',
        website: 'www.sadasasdasdd.com'
    }
    
]

let postArray: post[] = [
    {
        id: 1,
        title: 'Ola mundo',
        body: "Salve galerinha" ,
        userId: 2
    },
    {
        id: 2,
        title: 'Blablabla',
        body: "Salve galerinhaaaaaaa" ,
        userId: 1
    }
]

app.get("/users", (req, res) => { 
    res.send(userArray)
})

app.get("/posts", (req, res) => { 
    res.send(postArray)
})

app.get("/posts/:id", (req, res) => { 
    const id = req.params.id
    res.send(postArray.filter((post)=>{
        return post.userId === Number(id)
    }))
})

app.delete("/deleteUser/:name", (req, res)=>{
    const userName = req.params.name
    const newArr = userArray.filter(({name})=>{
        return name !== userName
    })
    userArray = newArr
    res.send(userArray)
})

app.delete("/deletePost/:id", (req, res)=>{
    const postId = req.params.id
    const newArr = postArray.filter(({id})=>{
        return id !== Number(postId)
    })
    postArray = newArr
    res.send(postArray)
})