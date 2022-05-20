/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// let deckComputador
// let deckJogador

// function jogo () {
//    console.log ('Bem vindo ao jogo de Blackjack')
//    let querJogar = confirm('Deseja iniciar uma nova rodada?')
//    // Caso a resposta seja positiva inicio o if
//    if(querJogar === true) {
//       // Declaro os decks como array vazio

//       deckComputador = []
//       deckJogador = []

//       // Crio uma estrutura de repetição para sortear 2 cartas para cada deck

//       for (let i = 0; i<2; i++) {
//          deckComputador.push(comprarCarta())
//          deckJogador.push(comprarCarta()) 
//       }          
//       // Imprimo no console os valores das mãos

//       console.log(`Computador - cartas: ${deckComputador[0].texto} ${deckComputador[1].texto} - pontuação ${deckComputador[0].valor + deckComputador[1].valor}`)      
//       console.log(`Usuario - cartas: ${deckJogador[0].texto} ${deckJogador[1].texto} - pontuação ${deckJogador[0].valor + deckJogador[1].valor}`)

//       // Checo o vencedor

//       if ((deckJogador[0].valor +deckJogador[1].valor > deckComputador[0].valor+deckComputador[1].valor) && (deckJogador[0].valor+deckJogador[1].valor <= 21)){
//          console.log('O usuario venceu!')
//       }
//       else if ((deckComputador[0].valor+deckComputador[1].valor > deckJogador[0].valor +deckJogador[1].valor) && (deckComputador[0].valor+deckComputador[1].valor <= 21))
//       console.log('O computador venceu!')
//       else {
//          console.log('Empate!')
//       }
//    }
//    else {
//       console.log('O jogo acabou')
//    }
// }
// jogo()