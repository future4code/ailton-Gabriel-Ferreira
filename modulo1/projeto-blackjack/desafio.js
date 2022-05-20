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


let qualPegou

let somaComputador = 0
let deckComputador

let deckJogador
let somaJogador = 0

let desejaComprar
let somatorioTotal
    
   function jogo () {
      console.log ('Bem vindo ao jogo de Blackjack')
      let querJogar = confirm('Deseja iniciar uma nova rodada?')
       // Caso a resposta seja positiva inicio o if
      if(querJogar === true) {
          // Declaro os decks como array vazio
    
         deckComputador = []
         deckJogador = []
          
         // Crio uma estrutura de repetição para sortear 2 cartas para cada deck
    
         sorteiaCartas(deckComputador, 2)
         sorteiaCartas(deckJogador, 2)
         checaAses()

         // Imprimo no console os valores das mãos
    
         imprimeValorInicial()

         // Pergunto se o jogador deseja comprar mais cartas

         // desejaComprar = confirm ('Deseja comprar mais cartas?')
         // if (desejaComprar === true) {
         //    sorteiaCartas(deckJogador, 1)
         // }   
         // console.log(deckJogador)       
    
         // Checo o vencedor
         somatorioTotalJogador()
         somatorioTotalComputador()
    
         if ((somaJogador > somaComputador) && (somaJogador <= 21)){
            console.log('O usuario venceu!')
         }
         else if ((somaComputador > somaJogador) && (somaComputador <= 21))
         console.log('O computador venceu!')
         else {
            console.log('Empate!')
         }
         console.log(somaJogador, somaComputador)
      }
       else {
          console.log('O jogo acabou')
       }
      }

   function checaAses (jogador, computador) {
      while ((deckComputador[0].texto.includes("A") && deckComputador[1].texto.includes("A")) || (deckJogador[0].texto.includes("A") && deckJogador[1].texto.includes("A")))
      {
         console.log('Rodei (me apague quando terminar)')
         for(let i=0; i<2; i++){
            deckJogador.pop()                  
         }                 
         for(let i=0; i<2; i++){
            deckComputador.pop()
         }
         sorteiaCartas(deckComputador, 2)
         sorteiaCartas(deckJogador, 2)
         }
         console.log('Não rodei (me apague quando terminar)')
         }  


// Funcao que imprime o valor inicial

function imprimeValorInicial () {
   console.log(`A carta revelada do computador é: ${deckComputador[0].texto} ${deckComputador[1].texto}`)      
   console.log(`Usuario - cartas: ${deckJogador[0].texto} ${deckJogador[1].texto} - pontuação ${deckJogador[0].valor + deckJogador[1].valor}`)
}

// Funcao de comprar cartas

function sorteiaCartas (qualDeck, numeroDeVez) {
   for (let i = 0; i<numeroDeVez; i++){
      qualDeck.push(comprarCarta())
      }
}

// Soma o valor do jogadore

function somatorioTotalJogador () {
   for (let i = 0; i < deckJogador.length; i++){
      somaJogador = somaJogador + deckJogador[i].valor
   }
}

// Soma o valor do computador

function somatorioTotalComputador () {
   for (let i = 0; i < deckComputador.length; i++) {
      somaComputador = somaComputador + deckComputador[i].valor
   }
}

// function somatorioTotal () {
// }

jogo()

// function somatorio (qualDeck) {
//    somatorioTotal = qualDeck.map((valores) => {
//       return valores.valor
//    })
//    for (let i)
// }