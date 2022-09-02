import { app } from "./app";
import { createProduct } from "./endpoints/createProduct";
import { createUser } from "./endpoints/createUser";
import { getProducts } from "./endpoints/getProducts";
import { getPurchasesFromUser } from "./endpoints/getPurchasesFromUser";
import { getUsers } from "./endpoints/getUsers";
import { newPurchase } from "./endpoints/newPurchase";

app.get("/users", getUsers);
app.post("/users", createUser);
app.get("/products", getProducts);
app.post("/products", createProduct);
app.post("/purchases", newPurchase);
app.get("/users/:user_id/purchases", getPurchasesFromUser);
