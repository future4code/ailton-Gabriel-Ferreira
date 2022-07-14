import React from "react";
import {
  Container,
  Explanation,
  ExplanationInternDiv,
  Main,
} from "./HomePageStyle";
import {
  ViewMoreButton,
  ButtonsMiniDiv,
  MediumIconRoundBorder,
} from "../../styles/GlobalStyle";
import AstronautOk from "../../images/astronaut-ok.jpg";
import AstronautRocket from "../../images/astronaut-rocket.jpg";
import AstronautFlying from "../../images/astronaut-flying.jpg";
import { useNavigate } from "react-router-dom";
import HeaderComp from "../Header/HeaderComp";
import { goToPage } from "../../routes/coordinator";

const HomePage = () => {
const navigate = useNavigate();
  return (
    <Container>
      <HeaderComp/>
      <Main>
        <div>
          <h2>A maior viagem da sua vida está a um clique de distancia</h2>
          <ViewMoreButton>Saiba Mais</ViewMoreButton>
        </div>
      </Main>

      <Explanation>
        <ExplanationInternDiv direction={true}>
          <p>
            A Labe-X traz para você a oportunidade de visitar qualquer lugar do
            universo por um preço acessivel.
          </p>
          <MediumIconRoundBorder
            src={AstronautOk}
            alt="Astronauta dando sinal de ok"
          />
        </ExplanationInternDiv>
        <ExplanationInternDiv direction={false}>
          <p>
            Nossa nave traz para você a incrível velocidade de dobra, oque lhe
            permite chegar a galaxia de Andromeda (2,5mi de anos luz de
            distancia) em apenas 15 dias!
          </p>
          <MediumIconRoundBorder
            src={AstronautRocket}
            alt="Astronauta dentro de um foguete acelerando"
          />
        </ExplanationInternDiv>
        <ExplanationInternDiv direction={true}>
          <p>
            Oferecemos pacotes para você conhecer as luas do nosso sistema
            solar, as estrelas da nossa vizinhança ou até mesmo outras galáxias.
            .
          </p>
          <MediumIconRoundBorder
            src={AstronautFlying}
            alt="Astronauta flutuando com o punho erguido"
          />
        </ExplanationInternDiv>
      </Explanation>

      <Main>
        <div>
          <p>
            Gostou da ideia de conhecer melhor nosso universo? Agende hoje mesmo
            sua viagem ou então conheça um pouco mais sobre alguns de nossos
            pacotes
          </p>
          <ButtonsMiniDiv>
            <ViewMoreButton >Agendar viagem</ViewMoreButton>
            <ViewMoreButton onClick={()=>goToPage(navigate, '/trips/list')}>Conhecer pacotes</ViewMoreButton>
          </ButtonsMiniDiv>
        </div>
      </Main>
    </Container>
  );
};

export default HomePage;
