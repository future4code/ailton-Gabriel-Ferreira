// Exercicio de interpretação
// 1 -
// a. undefined
// b. null
// c. 11
// d. 3
// e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
// f. 9

// 2 - SUBI NUM ONIBUS EM MIRROCOS

// let nome = prompt('Escreva seu Nome de Usuario')
// let email = prompt('Escreva seu E-mail')
// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o) ${nome}!`)

const comidas = ["Churrasco", "Hamburguer", "Pizza", "Sorvete de chocolate", "Sorvete"]
console.log(comidas)
console.log(`Essas são minhas comidas favoritas
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)
comidas[3].replace("Chocolate", prompt('Qual seu sabor de sorvete favorito'))
console.log(comidas)

// let listaDeTarefas = []
// listaDeTarefas = [prompt('Qual a primeira tarefa que você precisa fazer hoje?'), prompt('Qual a segunda tarefa que você precisa fazer hoje?'), prompt('Qual a terceira tarefa que você precisa fazer hoje?')]
// console.log(listaDeTarefas)
// let realizou = prompt(`Digite o indice das tarefas que você já realizou hoje
// 0 = ${listaDeTarefas[0]}
// 1 = ${listaDeTarefas[1]}
// 2 = ${listaDeTarefas[2]}`)
// listaDeTarefas.splice(realizou, 1)
// console.log(listaDeTarefas)

// let frase = prompt('Escreva uma frase')
// let fraseArray = frase.split(' ')
// console.log(fraseArray)

// let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// let posição = prompt("Escolha uma fruta")
// let inclui = frutas.includes(posição)
// console.log(inclui)
// console.log(frutas.indexOf(posição))