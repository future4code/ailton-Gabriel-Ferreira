import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import LabenuLogo from './img/labenu-logo.png'
import Senac from './img/senac-logo-4.png'
import Pfp from './img/pfp.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno'
import EmailIcon from './img/e-mail.png'
import AdressIcon from './img/adress.png'
import BottomArrow from './img/bottom-arrow.png'
import styled from 'styled-components'

const SecaoContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const Titulozinho = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;  
`

const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`


function App() {
  return (
    <ContainerTotal>

      <SecaoContainer>
        <Titulozinho>Dados pessoais</Titulozinho>
        <CardGrande 
          imagem={Pfp} 
          nome="Gabriel Theodoro Ferreira" 
          descricao="Ola, Me chamo Gabriel Theodoro Ferreira e sou estudante de desenvolvimento web front-end"
        />
        
        <ImagemButton 
          imagem={BottomArrow}
          texto="Ver mais"
        />
      </SecaoContainer>

      <div className="small-section-container">
        <CardPequeno 
        icone={EmailIcon}
        tipo="E-mail"
        texto="labenu@gmail.com"/>

        <CardPequeno
        icone={AdressIcon}
        tipo="Endereço"
        texto="Rua fulano" />
      </div>

      <SecaoContainer>
        <Titulozinho>Experiências profissionais</Titulozinho>
        <CardGrande 
          imagem={Senac} 
          nome="Senac" 
          descricao="Gestão de cadeia logística e de suprimentos" 
        />
        
        <CardGrande 
          imagem={LabenuLogo}
          nome="Labenu" 
          descricao="Desenvolvimento web full-stack" 
        />
      </SecaoContainer>

      <div className="page-section-container">
        <Titulozinho>Minhas redes sociais</Titulozinho>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </ContainerTotal>
  );
}

export default App;
