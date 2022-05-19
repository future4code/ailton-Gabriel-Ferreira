// Exercicio comentados

// 1 Ele irá somar numeros até que o numero somado seja 4, no console será impresso o resultado da soma 1+2+3+4 (10)

// 2 
// a. No console será impresso todos os valores do array que são maiores que 18
// b. Sim, para fazer isto é necessario usar o lista.indexOf(numero)

// 3 Ira aparecer 4 asteriscos (****)

// Exercicios de código =================================================================================================================================

// 1

// let bichinhos = Number(prompt('Quantos bixos você tem'))
// let nomesArr = []

// if (bichinhos === 0) {
//     console.log('Que pena! Você pode adotar um pet!')
// }
// else {
//     while (nomesArr.length < bichinhos){
//         nomesArr.push(prompt('Qual o nome do seu pet'))
//     }
// }
// console.log(nomesArr)

// 2
// a.

// let arrayNumero = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayPares = []

// for(let numero of arrayNumero) {
//     console.log(numero)
// }

// b.

// for(let numero of arrayNumero) {
//     console.log(numero/10)
// }

// c.

// const programa = () => {
//     for(let numero of arrayNumero){
//     let resto = numero % 2
//     if (resto === 0){
//         arrayPares.push(numero)
//     }
//     }
//     console.log(arrayPares)
// }
// programa()

// d.

// let arrayD = []
// for (let numero of arrayNumero){
//     let indice = arrayNumero.indexOf(numero)
//     arrayD.push(`O elemendo do indice ${indice} é ${numero}`)
// }
// console.log(arrayD)

// e.

// let maior = (1/0) * (-1)
// let menor = 1/0

// for (let numero of arrayNumero){
//     if(maior<numero){
//         maior=numero
//     }
// }
// console.log(maior)

// for (let numero of arrayNumero){
//     if(menor>numero){
//         menor=numero
//     }
// }
// console.log(menor)

// Desafios ====================================================================================================================================

// 1

// let numeroTentativas = 0
// const jogo = () => {
//     let jogar = confirm('Deseja iniciar o jogo?')
//     if (jogar === true) {

//         let primeiroNum = Number(prompt('Em qual numero você está pensando'))
//         let segundoNum = primeiroNum+1

//         while (primeiroNum !== segundoNum){

//             segundoNum = Number(prompt('Tente advinhar o numero'))
            
//             if (segundoNum>primeiroNum) {
//                 console.log(`O numero que você chutou foi ${segundoNum}
// O numero escolhido por mim foi menor`)
//             numeroTentativas += 1
//             }
//             else if (primeiroNum === segundoNum){
//                 console.log('Acertou!!')
//             }
//             else {
//                 console.log(`O numero que você chutou foi ${segundoNum}
// O numero escolhido por mim foi maior`)
//             numeroTentativas += 1  
//             }
//         }
//     }
//     else {
//         alert('Jogo encerrado!!')
//     }
//     console.log(`Acertou
// O numero de tentativas foi: ${numeroTentativas}`)
// }

// 2
// let testeee = console.log('Oi')
// let numeroTentativas = 0
// const jogo = () => {
//     let jogar = confirm('Deseja iniciar o jogo?')
//     if (jogar === true) {

//         let primeiroNum = parseInt(Math.random()*100)
//         let segundoNum = primeiroNum+1

//         while (primeiroNum !== segundoNum){

//             segundoNum = Math.floor(Math.random()*100)
            
//             if (segundoNum>primeiroNum) {
//                 console.log(`O numero que você chutou foi ${segundoNum}
// O numero escolhido por mim foi menor`)
//             numeroTentativas += 1
//             }
//             else if (primeiroNum === segundoNum){
//                 console.log('Acertou!!')
//             }
//             else {
//                 console.log(`O numero que você chutou foi ${segundoNum}
// O numero escolhido por mim foi maior`)
//             numeroTentativas += 1  
//             }
//         }
//     }
//     else {
//         alert('Jogo encerrado!!')
//     }
//     console.log(`Acertou
// O numero de tentativas foi: ${numeroTentativas}`)
// }
// jogo()

