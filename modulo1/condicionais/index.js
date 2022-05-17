// =======================================================================================================

// Exercicios comentados

// 1
// a. O codigo pede para que o usuario insira um numero e então verifica a sobra dele ao dividir por 2
// b. Para todos os numeros pares
// c. Para todos os numeros impares

// 2
// a. O codigo serve para o usuario inserir qual item gostaria de saber o preço
// b. O preço da fruta Maçã é R$ 2.25
// c. O valor declarado será o do default (5) ao invés do de Pêra (5,5)

// 3 
// a. Perguntando ao usuario um numero
// b. Passaria no teste e apareceria a mensagem secreta, No caso de -10 a mensagem seria undefined
// c. O console daria o valor undefined pois seu valor foi declarado apenas no escopo local do primeiro if

// =======================================================================================================

// Exercicios de código

// 1
// a.
// b.

// let idade = Number(prompt('Digite sua idade'))

// c.

// const podeDirigir = (idade) => {
//     if (idade>=18) {
//         console.log('Você pode dirigir')
//     }
//     else {
//         console.log('Você não pode dirigir')
//     }
// }

// podeDirigir(idade)

// 2

// let horario = prompt('Digite em qual horario você estuda M para manhã V para tarde ou N para noturno')

// if (horario === "M") {
//     console.log('Bom dia!')
// } 
// else if (horario === "V") {
//     console.log('Boa tarde!')
// }
// else if(horario === "N") {
//     console.log ('Boa noite!')
// }
// else {
//     console.log('foi de beise familia')
// }

// 3

// switch (horario){
//     case "M":
//         console.log("Bom dia!")
//         break

//     case "V":
//         console.log("Boa tarde!")
//         break

//     case "N":
//         console.log("Boa noite!")
//         break
// }

// 4

// let genero = prompt('Qual o genero do filme')
// let valorIngresso = Number(prompt('Qual o valor do ingresso'))
// genero = genero.toLowerCase()

// if ((genero === "fantasia") && (valorIngresso <= 15)) {
//     let lanche = prompt('Qual lanche você irá comprar')
//     console.log(`Bom filme! Aproveite bem o seu ${lanche}`)
// }
// else {
//     console.log('Escolha outro filme :(')
// }

// Desafios

// 2
let ticket
const criadorIngresso = () => {
        ticket = {
        quantidade: Number(prompt('Quantos ingressos você deseja comprar')),
        nomeIngresso: prompt('Qual o seu nome'),
        categoria: Number(prompt('Qual a categoria (1, 2, 3 ou 4)')),
        etapa: prompt('Qual a fase (SF DT ou FI)'),
        tipo: prompt('Qual o tipo de jogo (DO ou IN)')
    }
}
criadorIngresso()
let arraySf = [null, 1320, 880, 550, 220]
let arrayDt = [null, 660, 440, 330, 170]
let arrayFi = [null, 1980, 1320, 880, 330]
const ingresso = () => {
    let valorIngresso
    if (ticket.tipo === "DO"){ ticket.tipo = "Nacional", ticket.simbolo = "R$"
        if (ticket.etapa === "SF"){ ticket.etapa = "Semifinal"
            valorIngresso = arraySf[ticket.categoria]
        }
        else if (ticket.etapa === "DT"){ ticket.etapa = "Disputa de terceiro lugar"
            valorIngresso = arrayDt [ticket.categoria]
        }
        else if (ticket.etapa === "FI"){ ticket.etapa = "Final"
            valorIngresso = arrayFi[ticket.categoria]
        }
    }
    else { ticket.tipo = "Internacional", ticket.simbolo = "U$"
        if (ticket.etapa === "SF"){ ticket.etapa = "Semifinal"
            valorIngresso = arraySf[ticket.categoria]
        }
        else if (ticket.etapa === "DT"){ ticket.etapa = "Disputa de terceiro lugar" 
            valorIngresso = arraySf[ticket.categoria]
        }
        else if (ticket.etapa === "FI"){ ticket.etapa = "Final"
            valorIngresso = arraySf[ticket.categoria]
        }
    }
let valorfinal = valorIngresso * ticket.quantidade
console.log(`---Informações---
Nome do cliente: ${ticket.nomeIngresso}
Tipo de jogo: ${ticket.tipo}
Etapa de jogo: ${ticket.etapa}
Categoria: ${ticket.categoria}
Quantidade de ingressos: ${ticket.quantidade}
---Valores---
O valor por ingresso: ${ticket.simbolo}${parseInt(valorIngresso)}
O valor final: ${ticket.simbolo}${parseInt(valorfinal)}`)
}
ingresso()