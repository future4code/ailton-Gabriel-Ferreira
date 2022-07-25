import React from "react";
import {
  Container,
  LogoImg,
  LogoContainer,
  ContainerTexto,
  ContainerBotao,
} from "../styles/PaginaHomeStyle";
import { Botao, Texto, Titulo } from "../global/GlobalStyle";
import Logo from "../images/labenu-logo.png";

export const PaginaHome = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoImg src={Logo} />
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
        >
          Entrar
        </Botao>
      </ContainerBotao>
    </Container>
  );
};
