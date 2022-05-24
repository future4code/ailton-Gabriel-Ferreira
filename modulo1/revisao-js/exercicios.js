// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a,b) {return a-b})  
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novoArray = array.filter(item => item % 2 === 0) 
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArray = array.filter(item=> item % 2 === 0).map(item => item ** 2)
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let soma = -1/0
    for (let i=0; i<array.length; i++) {
        if (array[i]>soma){
            soma = array[i]
        }        
    }
    return soma
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let arrayOrg = [num1, num2]
    arrayOrg.sort(function (a,b) {return b-a})
    function divisibilidade (num1,num2) {
        if (arrayOrg[0] % arrayOrg[1] === 0) {
            return true
        }
        return false
    } 
    let dife = arrayOrg[0] - arrayOrg[1]
    return {
        maiorNumero: arrayOrg[0],
        maiorDivisivelPorMenor: divisibilidade(num1,num2),
        diferenca: dife

    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayInfinita = []
    for (let i = 0 ; i<n; i++) {
        arrayInfinita.push(i*2)
    }   
    return arrayInfinita
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    }    
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    }
    else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function (a,b) {return b-a})  
    let novoArray = [array[1], array[array.length-2]]
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novoObj = {
        ...pessoa,
        nome: "ANÔNIMO",
    }
    return novoObj
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasValidasAge = pessoas.filter((item)=>{
        return item.idade > 14 && item.idade < 60
    })
    pessoasValidasTrue = pessoasValidasAge.filter((item)=>{
        return item.altura > 1.5        
    })
    
    return pessoasValidasTrue
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasInvalidasAge = pessoas.filter((item)=>{
        return item.idade <= 14 || item.idade >= 60 || item.altura <= 1.5
    })    
    return pessoasInvalidasAge     
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let soma = 0
    let debito = 0
    const arrayDeContas = contas.map((item) =>{
        return item.compras
    })
    for (let i=0; i<arrayDeContas.length; i++) {        
        for (let j=0; j<arrayDeContas[i].length; j++) {
            soma += arrayDeContas[i][j]             
        }      
        arrayDeContas[i].push(soma)
        soma = 0        
    }    
    for (let i=0; i < contas.length; i++) {
        debito = contas[i].compras.pop()        
        contas[i].saldoTotal -= debito        
        contas[i].compras = []

        //contas[i].saldoTotal -= contas[i].compras[compras.length-1] // [100, 200, 300, parara]
    }    
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a,b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
    })
    return consultas  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let novoArrayDatas = []
    let separaDatas = []
    for (let i=0; i<consultas.length; i++){
        separaDatas[i] = consultas[i].dataDaConsulta.split("/")         
    }    
    separaDatas.sort(function (a,b) {return a[0]-b[0]})    
    separaDatas.sort(function (a,b) {return a[1]-b[1]})    
    for (let i=0; i<consultas.length; i++){
        separaDatas[i] = (`${separaDatas[i][0]}/${separaDatas[i][1]}/${separaDatas[i][2]}`)
    }
    for (let i=0; i<consultas.length; i++){
        for (const item of consultas) {
            if (item.dataDaConsulta == separaDatas[i]) {
                novoArrayDatas.push({nome: item.nome, dataDaConsulta: separaDatas[i]})
            }            
        }
    }   
    return novoArrayDatas
}