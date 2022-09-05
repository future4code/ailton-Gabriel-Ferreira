import app from "./app";

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
  public getCpf(): string {
    return this.cpf;
  }
  public getTransactions() {
    return this.transactions;
  }
  public addTransaction(transac: Transaction) {
    this.transactions.push(transac);
  }
}

const account1 = new UserAccount("21332", "gabriel", 12);

class Transaction {
  private description: string;
  private value: number;
  private date: string;
  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }
}

const transaction1 = new Transaction("Conta da oi", 100.0, "23/09/2022");
account1.addTransaction(transaction1);
console.log(account1.getTransactions());
