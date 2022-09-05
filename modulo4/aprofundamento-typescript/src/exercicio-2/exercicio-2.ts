type RetornoEstatistico = {
    maior:number,
    menor:number,
    media:number
}

function obterEstatisticas(numeros:number[]):RetornoEstatistico {    
    const numerosOrdenados = numeros.sort((a:number, b:number) => a - b)

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros:number) => {}
}

console.table(obterEstatisticas([1,2,6,2]))
