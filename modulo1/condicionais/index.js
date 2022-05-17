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

const ingresso = () => {
    
    switch (ticket.tipo){
        case "DO": ticket.tipo = "Domestico"
            switch (ticket.etapa){
                case "SF": ticket.etapa = "Semi-final"
                    switch (ticket.categoria){
                    case 4:
                        valorIngresso = 220
                        break
                    case 3:
                        valorIngresso = 550
                        break
                    case 2:
                        valorIngresso = 880
                        break
                    case 1:
                        valorIngresso = 1320
                        break
                    }

                case "DT": ticket.etapa = "Disputa de terceiro colocado"
                    switch (ticket.categoria){
                    case 4:
                        valorIngresso = 170
                        break
                    case 3:
                        valorIngresso = 330
                        break
                    case 2:
                        valorIngresso = 440
                        break
                    case 1:
                        valorIngresso = 660
                        break
                    }
                case "FI": ticket.etapa = "Final"
                    switch (ticket.categoria){
                    case 4:
                        valorIngresso = 330
                        break
                    case 3:
                        valorIngresso = 880
                        break
                    case 2:
                        valorIngresso = 1320
                        break
                    case 1:
                        valorIngresso = 1980
                        break
                    
                }                
            }
        case "IN": ticket.tipo = "Internacional"
                switch (ticket.etapa){
                    case "SF": ticket.etapa = "Semi-Final"
                        switch (ticket.categoria){
                        case 4:
                            valorIngresso = 220*4.1
                            break
                        case 3:
                            valorIngresso = 550*4.1
                            break
                        case 2:
                            valorIngresso = 880*4.1
                            break
                        case 1:
                            valorIngresso = 1320*4.1
                            break
                        }
    
                    case "DT": ticket.etapa = "Disputa de terceiro lugar"
                        switch (ticket.categoria){
                        case 4:
                            valorIngresso = 170*4.1
                            break
                        case 3:
                            valorIngresso = 330*4.1
                            break
                        case 2:
                            valorIngresso = 440*4.1
                            break
                        case 1:
                            valorIngresso = 660*4.1
                            break
                        }
                    case "FI": ticket.etapa = "Final"
                    switch (ticket.categoria){
                        case 4:
                            valorIngresso = 330*4.1
                            break
                        case 3:
                            valorIngresso = 880*4.1
                            break
                        case 2:
                            valorIngresso = 1320*4.1
                            break
                        case 1:
                            valorIngresso = 1980*4.1
                            break
                        
                    }
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
O valor por ingresso: ${parseInt(valorIngresso)}
O valor final: ${parseInt(valorfinal)}`)
}
ingresso()