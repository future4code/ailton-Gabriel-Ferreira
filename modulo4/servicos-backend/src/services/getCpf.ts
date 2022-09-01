import axios from "axios";
import { endereco } from "../types";

export async function getCpfFunc(cpf: string): Promise<any> {
  try {
    const response: any = await axios.get(
      `https://viacep.com.br/ws/${cpf}/json/`
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
}
