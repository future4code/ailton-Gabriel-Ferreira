/*
Resposta dos exercicios comentados
1 - Será impresso no console "10" e depois  "10 5"
2 - Será impresso no console "10 10 10"
3 - Os nomes das variaveis deveriam ser "horasTrabalhadasDia" e "salarioDia"
*/

let nome
let idade
console.log(typeof nome, typeof idade);
// A variavel é do tipo undefined pois não foi atribuido a ela nenhum valor
nome = prompt('Qual o seu nome?')
idade = prompt('Qual sua idade?')
console.log(typeof nome, typeof idade)
// Aqui as variaveis são do tipo "string" pois o comando prompt sempre transforma as respostas em stings
console.log('Olá', nome, 'você tem', idade, 'anos')

let pergunta1 = ('Olá você almoçou hoje?')
let pergunta2 = ('Você gosta de cachorro?')
let pergunta3 = ('Você gosta de estudar na Labenu')

let resposta1 = prompt(pergunta1)
let resposta2 = prompt(pergunta2)
let resposta3 = prompt(pergunta3)

console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)

let a = 10
let b = 25
let c
c=b
b=a
a=c

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

let numero1 = prompt('Valor 1')
let numero2 = prompt('Valor 2')
let resultadoSoma
let resultadoMultiplicaçao
resultadoSoma = Number(numero1) + Number(numero2) 
resultadoMultiplicaçao = Number(numero1) * Number(numero2) 
console.log('O resulado da multiplicação entre', numero1, 'e', numero2, 'é', resultadoMultiplicaçao, 'e a soma entre', numero1, 'e', numero2, 'é', resultadoSoma)