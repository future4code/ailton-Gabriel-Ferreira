import React from "react";
import {
  Container,
  LogoContainer,
  ContainerTexto,
  ContainerBotao,
} from "../styles/PaginaHomeStyle";
import { Botao, Texto, Titulo, LogoImg, LogoDiv, LogoPedaco } from "../global/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";
import Logo from "../images/labenu-logo.png";

export const PaginaHome = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <LogoContainer>
        <LogoDiv>
          <LogoPedaco cor={"#FE7E02"} direcao={"100% 0 0 0"}/>
          <LogoPedaco cor={"#45525B"} direcao={"100% 0 0 0"}/>
          <LogoPedaco cor={"#F9B24E"} direcao={"0 0 100% 0"}/>
          <LogoPedaco cor={"#A8BBC6"} direcao={"0 0 100% 0"}/>
        </LogoDiv>
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
        >
          Entrar
        </Botao>
      </ContainerBotao>
    </Container>
  );
};
