import express, { Request, response, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { accounts } from "./accounts";
import { account } from "./types";

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

app.get("/test", (req, res) => {
  res.status(418).send("Ola mundo");
});

app.post("/createAccount", (req, res) => {
  let account:account = req.body;
  account.balance = 0
  account.transaction = []
  try {
    console.table(account)
    if(accounts.find(data=>data.cpf === account.cpf)) {
        response.statusCode = 404 
        throw new Error(`Usuario com o CPF: ${account.cpf} já está cadastrado`);        
    }    
    const {name,age,cpf,birthday,balance,transaction} = account
    if (age < 18) {
        response.statusCode = 404
        throw new Error("O usuario deve ser maior de 18 anos");        
    }
    if (!name || name.length < 2 || cpf.length !== 14 || !birthday)  {
        response.statusCode = 404
        throw new Error("Verifique se as informações estão corretas");        
    }
    accounts.push(account);
    res.status(200).send("Usuario criado")
  } catch (error: any) {
    res.status(response.statusCode).send(error.message);
  }
});

app.get("/getAllAccounts", (req,res)=>{
    res.send(accounts)
})
