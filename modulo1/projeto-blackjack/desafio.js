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

let podeComprar = true
let podeComprarPc = false
    
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

         somatorioTotalJogador()

         if (somaJogador === 21) {
            podeComprar = false
         }  

         // Imprimo no console os valores das mãos
    
         imprimeValorInicial()

         // Somo a pontuação

         somatorioTotalJogador()
         somatorioTotalComputador()

         // Pergunto se o jogador deseja comprar mais cartas

         perguntaDesejaComprarMais()

         // Após o jogador comprar o computador pode comprar

         pcCompraMais()

         comparativo(somaJogador, somaComputador)
      }
      else {
         console.log('O jogo acabou')
      }
      }

   function checaAses (jogador, computador) {
      while ((deckComputador[0].texto.includes("A") && deckComputador[1].texto.includes("A")) || (deckJogador[0].texto.includes("A") && deckJogador[1].texto.includes("A")))
      {
         console.log('Mulligan)')
         for(let i=0; i<2; i++){
            deckJogador.pop()                  
         }                 
         for(let i=0; i<2; i++){
            deckComputador.pop()
         }
         sorteiaCartas(deckComputador, 2)
         sorteiaCartas(deckJogador, 2)
         }
         }  


// Funcao que imprime o valor inicial

function imprimeValorInicial () {
   console.log(`A carta revelada do computador é: ${deckComputador[0].texto}`)
   console.log(deckComputador)
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
   somaJogador = 0
   for (let i = 0; i < deckJogador.length; i++){
      somaJogador = somaJogador + deckJogador[i].valor
   }
}

// Soma o valor do computador

function somatorioTotalComputador () {
   somaComputador = 0
   for (let i = 0; i < deckComputador.length; i++) {
      somaComputador = somaComputador + deckComputador[i].valor
   }
}

// Função que compara

function comparativo (jogado, computado) {

   if ((somaJogador === 21 && somaComputador !== 21 || somaJogador < 21 && somaComputador > 21 || somaJogador < 21 && somaComputador < somaJogador)){
      console.log('O usuario venceu!')
   }
      else if (somaComputador > somaJogador || somaJogador > 21 && somaComputador < 21) {
   console.log('O computador venceu!')
   }
   else if ((somaComputador === somaJogador || somaComputador && somaJogador > 21)) {
      console.log('Empate!')
   }
   console.log(somaJogador, somaComputador)  
}

// Função que pergunta se o usuario deseja comprar mais

function perguntaDesejaComprarMais () {

   while (podeComprar === true) {
      if (confirm('Deseja comprar mais cartas?')) {
         sorteiaCartas(deckJogador, 1)
         console.log(`Comprou ${deckJogador[deckJogador.length-1].texto}`)
         somatorioTotalJogador()
         if (somaJogador >= 21) {
            podeComprar = false
         }
      } else {
         podeComprar = false
      }
      
   }
}

// Função que faz o pc comprar

function pcCompraMais () {
   if (somaComputador<somaJogador && somaJogador <= 21) {
      podeComprarPc = true
   }
   while (podeComprarPc === true){

      sorteiaCartas(deckComputador, 1)
      console.log(`O computador comprou ${deckComputador[deckComputador.length-1].texto}`)
      somatorioTotalComputador()

      if (somaComputador === 21) {
         podeComprarPc = false
      }
      else if (somaComputador > somaJogador){
         podeComprarPc = false
      }
      else {
         podeComprarPc = true
      }
   }
}

jogo()

// function somatorio (qualDeck) {
//    somatorioTotal = qualDeck.map((valores) => {
//       return valores.valor
//    })
//    for (let i)
// }