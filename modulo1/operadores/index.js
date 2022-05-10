// Exercicios comentados
// 1 - a. false, b. false, c. true, d. boolean

// 2 - O problema é que ele está somando resultados do tipo string e no console será mostrado os dois numeros concatenados

// 3 - Para conseguir somar os valores deverá transformar os resultados do tipo string em numero usando Number(primeiroNumero)+Number(segundoNumero)

//Exercicios de codigo
// 1:

let idadeUsuario = +prompt('Qual sua idade')
let idadeAmigo = +prompt('Qual a idade do seu melhor amigo')
let comparacao = idadeUsuario > idadeAmigo
console.log('Sua idade é maior do que a do seu melhor amigo?,', comparacao)
console.log('A diferença de idade entre você e seu amigo é', idadeUsuario - idadeAmigo)

// 2:

let numeroPar = +prompt('Insira um numero par')
let resto1 = numeroPar % 2
console.log (resto1)

// Caso o usuario insira um numero impar o resultado será 1

//3:

let idade = +prompt('Qual sua idade')
let anoBissexto = idade/4
let idadeMeses = idade*12
let idadeDias = parseInt(idade*365 + anoBissexto)
let idadeHoras = (idadeDias*24) + (anoBissexto*24)
console.log(`Sua idade em meses é ${idadeMeses}, Sua idade em dias é ${idadeDias}, Sua idade em horas é ${idadeHoras}`)

//4:

let numero1 = Number(prompt('Insira um numero'))
let numero2 = Number(prompt('Insitra outro numero'))
console.log(`${numero1} é maior que ${numero2}? ${numero1>numero2}`)
console.log(`${numero1} é igual a ${numero2}? ${numero1===numero2}`)
let resto = numero1 % numero2
let restoInverso = numero2 % numero1
console.log(`${numero1} é divisivel por ${numero2}? ${resto === 0}`)
console.log(`${numero2} é divisivel por ${numero1}? ${restoInverso === 0}`)