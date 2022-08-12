let minhaString:string
minhaString = "Gabriel"
// minhaString = true
// a) ele não deixa

// b>
let meuNumero:number|string
meuNumero = 23
meuNumero = "23 string"

type Pessoa = {
    nome:string,
    idade:number,
    corFavorita:Cores
}

enum Cores {
    Vermelho = "Vermelho",
    Laranja = "Laranja",
    Amarelo = "Amarelo",
    Verde = "Verde",
    Azul = "Azul",
    AzulEscuro = "Azul-Escuro"
}

const gabriel:Pessoa = {
    nome: "gabriel",
    idade: 23,
    corFavorita: Cores.Azul
}


console.table(gabriel)