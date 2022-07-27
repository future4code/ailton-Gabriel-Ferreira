import React from "react";
import { LabenuLogo } from "../components/LabenuLogo/LabenuLogo";
import { Barra, Botao, BotaoNav } from "../global/GlobalStyle";
import {
  CaixaDeTexto,
  Container,
  ContainerInputs,
  InputELabel,
  Label,
  Linha,
} from "../styles/PaginaFeedStyle";
import { useRequestData } from "../hooks/useRequestData";
import { base_url } from "../constants/constants";
import { Posts } from "../components/Posts/Posts";

export const PaginaFeed = () => {
  const token = localStorage.getItem("token");
  const posts = useRequestData(`${base_url}/posts`, token);

  return (
    <Container>
      <Barra>
        <div></div>
        <div>
          <LabenuLogo tamanho={"28px"} />
        </div>
        <div>
          <BotaoNav>Logout</BotaoNav>
        </div>
      </Barra>
      <ContainerInputs>
        <InputELabel>
          <CaixaDeTexto name="body" largura={"100%"} altura={"24px"} distanciamento={" 4px 15px"} />
          <Label distanciamento={" 2px 15px"}>Titulo</Label>
        </InputELabel>
        <InputELabel>
          <CaixaDeTexto name="body" largura={"100%"} altura={"132px"} distanciamento={" 18px 15px"} />
          <Label distanciamento={" 15px 15px"}>Escreva seu texto...</Label>
        </InputELabel>
        <Botao
          borda={"none"}
          bordaRaio={"12px"}
          cor={"#fff"}
          gradiente={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
          tamanho={"85%"}
        >
          Postar
        </Botao>
        <Linha />
      </ContainerInputs>
      <Posts dados={posts} />
    </Container>
  );
};
