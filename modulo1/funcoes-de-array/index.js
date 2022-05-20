// Exercicios comentados

// 1
// a. Será impresso o usuario.nome, usuario.apelido assim como uma cópia do array usuario em cada log

// 2 
// b. Será impresso apenas os nomes

// 3
// c. Será impresso todos objetos que o apelido não seja "Chijo"

// ======================================================================

// Exercicios de código

// 1 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a. 
 
//  const arrayNomeDogs = pets.map((bixos) =>{
//      return bixos.nome
//  })
//  console.log(arrayNomeDogs)

//  // b.

//  const arraySalsichas = pets.filter((bixos) => {
//      return bixos.raca === "Salsicha"
//  })
//  console.log(arraySalsichas
//     )

// c.

const mensagemPoodles = pets.filter((bixos) => { return bixos.raca === "Poodle"}).map((bixo) => {return `Você ganhou um cupom de desconto de 10% para tosar o/a ${bixo.nome}!`})
console.log(mensagemPoodles)

// 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

 // a.

//  const nomeProdutos = produtos.map((nomes)=>{
//      return nomes.nome
//  })
//  console.log(nomeProdutos)

 // b.


// const aplicaDesconto = produtos.map((produtin)=>{
//     return [produtin.nome, produtin.preco*0.95]
//  })
// console.log(aplicaDesconto)

// c.

// const objetosBebida = produtos.filter((productos)=>{
//     return productos.categoria === "Bebidas"
// })
// console.log(objetosBebida)

// d.

// const objetosYpe = produtos.filter((ypezin) => {
//     return ypezin.nome.includes("Ypê")
// }
// )
// console.log(objetosYpe)

// e.

let frasesYpe = []
const compreHoje = objetosYpeCompre = produtos.filter((ypezada)=>{
    return ypezada.nome.includes("Ypê")
}).map((frasis)=>{
    frasesYpe.push(`Compre ${frasis.nome} por R$ ${frasis.preco}`)
})
console.log(frasesYpe)

// =======================================================================

// Desafios

// 1
// a.

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//     { nome: "Vulpix", tipo: "fogo" },
//  ]

// const nomesPoke = pokemons.map((nomePokemao) => {
//     return nomePokemao.nome
// }).sort()

// console.log(nomesPoke)

// b.

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
    { nome: "Vulpix", tipo: "fogo" },
 ]

const todosOsTipos = pokemons.map((pikomon) => pikomon.tipo)
const tipos = todosOsTipos.filter((nome, indice) => todosOsTipos.indexOf(nome) === indice)
console.log(todosOsTipos)
console.log(tipos)
    