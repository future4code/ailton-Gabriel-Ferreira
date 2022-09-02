import axios from "axios";
import { response } from "express";
import { connection } from "./connection";

export async function getPrice(id: string) {
  try {
    const response = await connection
      .select("price")
      .from("labecommerce_products")
      .where("id", id);
    const { price } = response[0];
    return price;
  } catch (error) {
    console.log(error);
  }
}
