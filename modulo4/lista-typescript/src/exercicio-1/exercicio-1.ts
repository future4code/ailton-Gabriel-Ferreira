const readlineSync = require("readline-sync");
const myName: string = readlineSync.question("Qual o seu nome? ");
const myBirthDate: string = readlineSync.question(
  "Qual sua data de nascimento? "
);
const dateArr:string[] = myBirthDate.split("/");
console.log(`Olá me chamo ${myName}, nasci no dia ${dateArr[0]} do mês de ${dateArr[1]} do ano de ${dateArr[2]}`);
