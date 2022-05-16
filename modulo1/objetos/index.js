// Exercicios Comentados

// 1 - 
// Matheus Nachtergaele
// Virginia Cavendish
// Canal: "Globo", Horario "14h"

// 2 -
// a -
// nome: "Juca"
// idade: 3
// raca: SRD
// nome: "Juba"
// idade: 3
// raca: SRD
// nome: "Jubo"
// idade: 3
// raca: SRD
// b-
// Os tres pontos criam um espelho de um objeto

//Exercicios de Código

// 1
// a.

// const apelido = {
//     nome: "Silvio",
//     apelidos: ["Silvinho", "Silvio Luiz", "Gato de calça"],
// }
// let apresenta = (pessoa) => console.log(`Olá me chamo ${pessoa.nome} mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
// apresenta(apelido)

// b.
// let apelido2 = {...apelido, apelidos: ["Gato de bigode", "Primo do piludinho", "Gabiru"]}
// apresenta(apelido2)

// 2
// a.

// const objeto1 = {
//     nome: "Jose",
//     idade: 22,
//     profissao: "Marcenaria"
// }
// const objeto2 = {
//     nome: "Fernanda",
//     idade: 45,
//     profissao: "Enfermeira"
// }
// const medir = (pessoa) => console.log(`${pessoa.nome} tem ${pessoa.nome.length} caracteres, ${pessoa.idade} anos e ${pessoa.profissao} tem ${pessoa.profissao.length} caracteres`)
// medir(objeto2)

// 3
// a.

// let carrinho = []

// b.

// let fruta1 = {
//     nome: "Banana",
//     disponibilidade: true
// }
// let fruta2 = {
//     nome: "Laranja",
//     disponibilidade: true
// }
// let fruta3 = {
//     nome: "Melancia",
//     disponibilidade: true
// }

// c.

// let listaCompras = (fruta) => carrinho.push(fruta)

// function listaCompras (fruta){
//     return carrinho.push(fruta)
// }

// listaCompras(fruta1)
// listaCompras(fruta2)
// listaCompras(fruta3)

// console.log(carrinho)

// Desafios

// 1

// const receba = {
//     nome: prompt('Qual o seu nome'),
//     idade: prompt('Qual sua idade'),
//     profissão: prompt('Qual sua profissão')

// }
// console.log(receba)
// console.log(typeof(receba))

// 2

// function comparaFilmes (filme1, filme2) {
//     console.log(`${filme1.nome} foi lançado antes de ${filme2.nome}?`, filme1.ano < filme2.ano)
//     console.log(`${filme1.nome} foi lançado no mesmo ano que ${filme2.nome}?`, filme1.ano === filme2.ano)
// }

// const filmeUm = {
//     nome: "Mineirinho Adventures",
//     ano: 2018,
// }

// const filmeDois = {
//     nome: "Batman na feira da fruta",
//     ano: 2018,
// }

// comparaFilmes(filmeUm,filmeDois)

// 3

// function saiu(fruta) {
//     return fruta.disponibilidade = !fruta.disponibilidade
// }
// saiu(fruta1)
// saiu(fruta2)
// saiu(fruta3)