// Exercicios comentados

// 1 - a. 10, 20, b. nada

// 2 - a. Esta função transforma os caracteres maiusculos em minusculos e depois verifica
// se na frase contém a palavra "cenoura"
// b. I. true
//    II. true
//    III. false

// Exercicios de Código

// 1 - a.

// const apresentação = () => console.log('Eu sou Gabriel, tenho 21 anos, moro no Rio de Janeiro e sou estudante.')

// b.
// let infos = prompt('Digite seu Nome, idade, endereço e profissao')
// let infosSep = infos.split(' ')
// const apresentacaoParametros = (nome, idade, endereço, profissao) => console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereço} e sou ${profissao}`)
// console.log(apresentacaoParametros.apply(null, infosSep))

//2 - a.

// const somar = (num1, num2) => num1 + num2
// console.log(somar(2,3))

// b.

// function comparar(a, b){
//     let comparacao = a >= b
//     return comparacao
// }

// let val1 = (prompt('Primeiro valor'))
// let val2 = (prompt('Segundo valor'))

// console.log(comparar(val1, val2))

// c.

// function parImpar (num1) {
//     let resto = num1 % 2
//     let resultado = resto === 0
//     return resultado
// }
// console.log(parImpar(Number(prompt('Digite um numero'))))

// d.

// const texto = (texto) => {
// let texto1 = prompt('Digite aqui seu texto')
// let texto1Min = texto1.toLowerCase()
// let tamanho = texto1Min.length
// console.log(tamanho)
// console.log(texto1Min)
// }
// console.log(texto())

// 3 -

// let val1 = Number(prompt('Insira um numero'))
// let val2 = Number(prompt('Insira outro numero'))
// const somar = (a,b) => a+b
// const subtrair = (a,b) => a-b
// const multiplicar = (a,b) => a*b
// const dividir = (a,b) => a/b
// console.log(`Numeros inseridos ${val1} e ${val2}
// Soma: ${somar(val1, val2)}
// Subtração: ${subtrair(val1, val2)}
// Multiplicação: ${multiplicar(val1, val2)}
// Divisão: ${dividir(val1, val2)} `)

// Desafios

// 1 -

// const func1 = (val1) => console.log(val1)

// const func2 = (num1, num2) => {

// let resultado = num1+num2 
// func1(resultado)
// }
// func2(5,2)

// const pitagoras = (num1, num2) => {
//     let hipo = ((num1 ** 2) + (num2 ** 2)) ** 0.5
//     return hipo
// }
// console.log(pitagoras(3,4))