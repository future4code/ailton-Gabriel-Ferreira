let baralho // Variavel que criarei o baralho finito
let cartaEscondida // Variavel que define a carta escondida no começo da rodada
let segundaCarta // Variavel para pegar o valor da carta revelada do computador e dizer ao jogador
let iniciaJogo = true // Enquanto essa variavel for verdadeira o jogo poderá ser reiniciado mantendo o placar, quando ela for falsa o jogo termina e o placar é zerado

// Placar
let placarJogador = 0
let placarPc = 0

// Dados computador

let somaComputador = 0 // Pontuação total
let deckComputador // Sua mão
let asesComputador = 0 // Define o valor de ases

// Dados jogador

let somaJogador = 0 // Pontuação total
let deckJogador // Sua mão
let asesJogador = 0 // Define o valor de ases

let podeComprar = true // Enquanto essa variavel for verdadeira o jogador pode comprar
let podeComprarPc = false // Enquanto essa variavel for true o computador pode comprar

 

   function jogo () {

            // Declaro as mãos como array vazio

      deckComputador = []
      deckJogador = []          
      
      while (iniciaJogo === true) {

      alert('Bem vindo ao jogo de Blackjack') // Pergunto se deseja iniciar o jogo
      let querJogar = confirm(`Deseja iniciar uma nova rodada?
Placar atual: Computador ${placarPc} a ${placarJogador} Jogador`)  

      if(querJogar === true) { // Caso a resposta seja positiva inicio o if

         // Zero as pontuação de soma e esvazio a mão dos jogadores. mantendo só o placar

         asesComputador = 0
         asesJogador = 0
         somaJogador = 0
         somaComputador = 0
         podeComprar = true
         deckComputador = []
         deckJogador = []

         // Refaço o baralho

         fazerBaralho() // Monto o baralho 
         embaralhar() // Embaralho  

         // Após isso defino a carta escondida do computador
         
         cartaEscondida = baralho.pop() // Defino a carta escondida  
         deckComputador.push(cartaEscondida) // Passo para o computador
         somaComputador += pegarValor(cartaEscondida) // Pego o valor da carta escondida e somo ao valor do computador
      
         // Sorteio a carta revelada do computador e as cartas do jogador
    
         sorteiaCartasJogado(2) // Dou duas cartas ao jogador
         sorteiaCartasPc(1) // Dou a carta revelada do computador

         // Caso o jogador comece o jogo com a carta 21 ele não poderá comprar mais cartas

         if (somaJogador === 21) {
            podeComprar = false
         }

         segundaCarta = pegarValor(deckComputador[1]) // Pego o valor da carta revelada do computador    
         imprimeValorInicial() // Imprimo no console os valores das mãos

         // Inicio a rodada de compras

         perguntaDesejaComprarMais() // Pergunto se o jogador deseja comprar mais cartas
         pcCompraMais() // Após o jogador comprar o computador pode comprar
         comparativo() // Vejo quem venceu
         console.log(baralho)
         
         iniciaJogo = true
      }
      else {
         alert('O jogo acabou')
         iniciaJogo = false
      }
      }
      }

// Funcao que cria o baralho

function fazerBaralho () {
   let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
   let naipes = ["♦️", "♥️", "♣️", "♠️"]
   baralho = [] 

   for (let i = 0; i<naipes.length; i++){
      for (let j = 0; j<valores.length; j++)
      baralho.push(valores[j] + naipes[i])
   }
}

// Funcao que embaralha

function embaralhar () {
   for (let i=0; i < baralho.length; i++){
      let j = Math.floor(Math.random() * baralho.length)
      let trocar = baralho[i]
      baralho [i] = baralho[j]
      baralho[j] = trocar
   }
}

// Funcao que pega o valor

function pegarValor(carta) {
   let dados = carta.split("")
   let valor = dados[0]
   if (isNaN(valor)) {
      if (valor == "A") {
         return 11
      }
      return 10
   }
   else if (valor == 1) {
      return 10
   }
   return(parseInt(valor))
}

// Funcao que checa se a carta é As

function checarAses (carta) {
   if (carta.includes("A")) {
      return 1
      console.log('Peguei um As')
   }
   return 0
   console.log('Não é As')
}

// Funcao que mostra a mensagem inicial ao começar o jogo

function imprimeValorInicial () {
   alert (`Suas cartas são ${deckJogador[0]} ${deckJogador[1]}.
O valor das suas cartas é ${somaJogador}
A carta revelada do computador é ${deckComputador[1]}
O valor da carta revelada do computador é ${segundaCarta}`)
}

// Funcao de comprar cartas e somar o valor ao jogador

function sorteiaCartasJogado (numeroDeVez) {
   for (let i = 0; i<numeroDeVez; i++){
      let cartaTirada = baralho.pop()
      deckJogador.push(cartaTirada)
      somaJogador += pegarValor(cartaTirada)
      asesJogador += checarAses(cartaTirada)      
      }      
}

// Funcao de comprar cartas e somar o valor ao computador

function sorteiaCartasPc (numeroDeVez) {
   for (let i = 0; i<numeroDeVez; i++){
      let cartaTirada = baralho.pop()
      deckComputador.push(cartaTirada)
      somaComputador += pegarValor(cartaTirada)
      asesComputador += checarAses(cartaTirada)
      }      
}

// Função que compara

function comparativo () {
     if ((somaJogador === 21 && somaComputador !== 21 || somaJogador < 21 && somaComputador > 21 || somaJogador < 21 && somaComputador < somaJogador)){
        placarJogador += 1
        alert(`Suas cartas são ${deckJogador}.
Sua pontuação é ${somaJogador}
As cartas do computador são ${deckComputador}. 
A pontuação do computador é ${somaComputador}
Você venceu!!
O placar é: Computador ${placarPc} a ${placarJogador} Jogador`)
   }
      else if (somaComputador > somaJogador || somaJogador > 21 && somaComputador < 21) {
      placarPc += 1
      alert(`Suas cartas são ${deckJogador}. 
Sua pontuação é ${somaJogador}
As cartas do computador são ${deckComputador}. 
A pontuação do computador é ${somaComputador}
O computador venceu!
O placar é: Computador ${placarPc} a ${placarJogador} Jogador`)
   }
   else if ((somaComputador === somaJogador || somaComputador && somaJogador > 21)) {
      alert(`Suas cartas são ${deckJogador}. 
Sua pontuação é ${somaJogador}
As cartas do computador são ${deckComputador}. 
A pontuação do computador é ${somaComputador}
Empate
O Placar é: Computador ${placarPc} a ${placarJogador} Jogador`)
   }
}

// Função que pergunta se o usuario deseja comprar mais

function perguntaDesejaComprarMais () {    
   while (podeComprar === true) {
      if (confirm(`Suas cartas são ${deckJogador}.
O valor das suas cartas é ${somaJogador}
A carta revelada do computador é ${deckComputador[1]}
O valor da carta revelada do computador é ${segundaCarta}
Deseja comprar mais uma carta?`)) {

         sorteiaCartasJogado(1)
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
   if (somaComputador < somaJogador && somaJogador <= 21) {
      podeComprarPc = true
   }
   while (podeComprarPc === true){

      sorteiaCartasPc(1)

      alert(`O computador comprou ${deckComputador[deckComputador.length-1]}
As cartas do computador são ${deckComputador} valor: ${somaComputador}
Suas cartas são ${deckJogador} o valor das suas cartas é: ${somaJogador}`)

      if (somaComputador >= 17) {
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