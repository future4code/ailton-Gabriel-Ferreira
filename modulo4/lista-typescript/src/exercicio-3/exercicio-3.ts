enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme = {
    nome:string
    ano:number
    genero: GENERO
    pontuacao?:number
}

const criaFilme = (nome:string, lancamento:number, genero:GENERO, pontuacao?:number):filme => {
    const filme:filme = {
        nome: nome,
        ano: lancamento,
        genero: genero,
    }
    if (pontuacao) {
        filme.pontuacao = pontuacao
    }
    return filme
}

console.log(criaFilme("gabriel", 2019, GENERO.ACAO, 96))

