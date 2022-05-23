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
    const novoArray = array.filter(item=> item % 2 === 0) 
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArray = array.filter(item=> item % 2 === 0).map(item => item ** 2)
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let soma = 0
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
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}