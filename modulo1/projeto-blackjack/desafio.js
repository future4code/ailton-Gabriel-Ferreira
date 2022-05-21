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

let arrayTexto
let qualPegou
let textoMapeadoPc
let textoMapeadoUsuario
let baralho
let cartaEscondida
let iniciaJogo = true

// Placar
let placarJogador = 0
let placarPc = 0

// Dados computador

let somaComputador = 0
let deckComputador
let asesComputador = 0

// Dados jogador

let somaJogador = 0
let deckJogador
let asesJogador = 0

let desejaComprar
let somatorioTotal

let podeComprar = true
let podeComprarPc = false


   fazerBaralho() // Monto o baralho 
   embaralhar() // Embaralho   

   function jogo () {

      // Declaro as mãos como array vazio

      deckComputador = []
      deckJogador = []          
      
      while (iniciaJogo === true) {

      console.log ('Bem vindo ao jogo de Blackjack') // Pergunto se deseja iniciar o jogo
      let querJogar = confirm(`Deseja iniciar uma nova rodada?
Placar atual Computador ${placarPc} a ${placarJogador} Jogador`)  

      if(querJogar === true) { // Caso a resposta seja positiva inicio o if

         somaJogador = 0
         somaComputador = 0
         podeComprar = true
         deckComputador = []
         deckJogador = []

         cartaEscondida = baralho.pop() // Defino a carta escondida  
         deckComputador.push(cartaEscondida) // Passo para o computador
         somaComputador += pegarValor(cartaEscondida) // Pego o valor da carta escondida e somo ao valor do computador
         console.log(`A carta escondida é ${cartaEscondida}`)
      
         // Sorteio a carta revelada do computador e as cartas do jogador
    
         sorteiaCartasJogado(2)
         sorteiaCartasPc(1)
        
         // somatorioTotalJogador() // Somo o valor da mão do jogador para saber se ele ja tem 21 pontos

         if (somaJogador === 21) {
            podeComprar = false
         }           
    
         imprimeValorInicial() // Imprimo no console os valores das mãos     

         perguntaDesejaComprarMais() // Pergunto se o jogador deseja comprar mais cartas
         pcCompraMais() // Após o jogador comprar o computador pode comprar
         comparativo() // Vejo quem venceu
         iniciaJogo = true
      }
      else {
         console.log('O jogo acabou')
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

function pegarValor(carta){
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
   }
   return 0
}

function imprimeValorInicial () {
   alert (`Suas cartas são ${deckJogador[0]} ${deckJogador[1]}. A carta revelada do computador é ${deckComputador[1]}`)
}

// Funcao de comprar cartas

function sorteiaCartasJogado (numeroDeVez) {
   for (let i = 0; i<numeroDeVez; i++){
      let cartaTirada = baralho.pop()
      deckJogador.push(cartaTirada)
      somaJogador += pegarValor(cartaTirada)
      console.log(`testeee aqui ${pegarValor(cartaTirada)}`)
      console.log('Test', deckJogador)
      asesJogador += checarAses(cartaTirada)
      console.log(`Peguei ${cartaTirada} para o deck Jogado e somei para ${somaJogador}`)
      }      
}

function sorteiaCartasPc (numeroDeVez) {
   for (let i = 0; i<numeroDeVez; i++){
      let cartaTirada = baralho.pop()
      deckComputador.push(cartaTirada)
      somaComputador += pegarValor(cartaTirada)
      asesComputador += checarAses(cartaTirada)
      console.log(`Peguei ${cartaTirada} para o deck PC e somei para ${somaComputador}`)
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
O placar é Computado: ${placarPc} Jogador: ${placarJogador}`)
console.log(placarJogador, placarPc)
   }
      else if (somaComputador > somaJogador || somaJogador > 21 && somaComputador < 21) {
      placarPc += 1
      alert(`Suas cartas são ${deckJogador}. 
Sua pontuação é ${somaJogador}
As cartas do computador são ${deckComputador}. 
A pontuação do computador é ${somaComputador}
O computador venceu!
O placar é Computado: ${placarPc} Jogador: ${placarJogador}`)
   }
   else if ((somaComputador === somaJogador || somaComputador && somaJogador > 21)) {
      alert(`Suas cartas são ${deckJogador}. 
Sua pontuação é ${somaJogador}
As cartas do computador são ${deckComputador}. 
A pontuação do computador é ${somaComputador}
Empate`)
   }
}

// Função que pergunta se o usuario deseja comprar mais

function perguntaDesejaComprarMais () {

   while (podeComprar === true) {
      if (confirm(`Suas cartas são ${deckJogador}. A carta revelada do computador é ${deckComputador[1]}
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
   if (somaComputador<somaJogador && somaJogador <= 21) {
      podeComprarPc = true
   }
   while (podeComprarPc === true){

      sorteiaCartasPc(1)
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

// while (iniciaJogo == true) {
//    if (confirm('Deseja iniciar uma nova rodada?')) {
//       jogo()
//    }
//    else {
//       alert (`Jogo encerrado! Placar Computador ${placarPc} a ${placarJogador} Jogador`)
//       iniciaJogo = false
//    }
// }