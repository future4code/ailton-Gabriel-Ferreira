import express, { Request, response, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { products } from "./data";

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

app.get("/test", (req: Request, res: Response) => {
  res.send("Api Funcionando");
});

app.post("/createProduct", (req: Request, res: Response) => {
  type obj = {
    id: string;
    name: string;
    price: number;
  };
  let newProduct: obj = req.body;
  try {
    const { name, price } = newProduct;
    if (!name || !price || price<0) {
      response.statusCode = 404;
      throw new Error("Um ou mais parametros invalidos");
    }
    if (typeof(name) !== "string" && typeof(price)=== "number") {
      response.statusCode = 404;
      throw new Error(`Parametro name (${name}) invalido`);
    }
    if (typeof(name) === "string" && typeof(price) !== "number") {
      response.statusCode = 404;
      throw new Error(`Parametro preço (${price}) invalido`);
    }
    if (typeof(name) !== "string" && typeof(price) !== "number") {
        response.statusCode = 404;
        throw new Error(`Parametro preço (${price}) e paramtro nome (${name}) invalido`);
      }
    newProduct.id = Math.floor(Math.random() * 10000000000000000).toString();
    products.push(newProduct);
    res.status(201).send(products);
  } catch (error: any) {
    res.status(response.statusCode).send(error.message);
  }
});

app.get("/getAllProducts", (req: Request, res: Response) => {
  res.status(200).send(products);
});

app.put("/editProductPrice/:id", (req: Request, res: Response) => {
  const price: number = req.body.price;
  try {
    const indexOfProduct: number = products.findIndex((data) => {
      return data.id === req.params.id;
    });
    if (indexOfProduct === -1) {
      response.statusCode = 404;
      throw new Error(
        `Nenhum produto com o id ${req.params.id} foi encontrado`
      );
    }
    if (price < 0 || !price || typeof(price) !== "number") {
      response.statusCode = 400;
      throw new Error(`Parametro passado como preço (${price}) invalido`);
    }
    products[indexOfProduct].price = price;
    res.status(200).send(products);
  } catch (error: any) {
    res.status(response.statusCode).send(error.message);
  }
});

app.delete("/deleteProduct/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const indexOfProduct = products.findIndex(data=>{
        return data.id === id
    })
    try {
        if(indexOfProduct === -1){
            response.statusCode = 404
            throw new Error(`Produto com id ${id} não econtrado`);            
        } else {
            products.splice(indexOfProduct, 1)
        }

        res.status(200).send(products)        
    } catch (error:any) {
        res.status(response.statusCode).send(error.message)        
    }
})