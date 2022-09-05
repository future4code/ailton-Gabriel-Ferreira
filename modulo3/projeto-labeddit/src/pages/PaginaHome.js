import React from "react";
import {
  Container,
  LogoContainer,
  ContainerTexto,
  ContainerBotao,
} from "../styles/PaginaHomeStyle";
import { Botao, Texto, Titulo } from "../global/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";
import { LabenuLogo } from "../components/LabenuLogo/LabenuLogo";

export const PaginaHome = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <LogoContainer>
        <LabenuLogo tamanho={"84px"}/>
      </LogoContainer>
      <ContainerTexto>
        <Titulo tamanho={"2rem"}>LabEddit</Titulo>
        <Texto tamanho={"1rem"}>O projeto de rede social da Labenu</Texto>
      </ContainerTexto>
      <ContainerBotao>
        <Botao
          borda={"none"}
          bordaRaio={"28px"}
          cor={"#fff"}
          gradiente={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
          onClick={() => goToLogin(navigate)}
          tamanho={"85%"}
        >
          Entrar
        </Botao>
      </ContainerBotao>
    </Container>
  );
};
