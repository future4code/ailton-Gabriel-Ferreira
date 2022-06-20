function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let numeroVezes = 0
    for (let i = 0; i < arrayDeNumeros.length; i++) {

        if (arrayDeNumeros[i] === numeroEscolhido) {
            numeroVezes = numeroVezes + 1
        }
    }
    if (numeroVezes > 0) {
        return (`O número ${numeroEscolhido} aparece ${numeroVezes}x`)
    }
    else {
        return (`Número não encontrado`)
    }
}