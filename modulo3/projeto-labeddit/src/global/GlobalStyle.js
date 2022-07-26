import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "IBM Plex Sans";
}
`;

export const Titulo = styled.h1`
  font-size: ${(props) => props.tamanho};
  font-weight: 700;
  color: #373737;
`;

export const Texto = styled.p`
  font-size: ${(props) => props.tamanho};
  color: #000;
`;

export const Botao = styled.button`
  font-size: 1rem;
  color: ${(props) => props.cor};
  background: ${(props) => props.gradiente};
  border: ${(props) => props.borda};
  border-radius: ${(props) => props.bordaRaio};
  width: 85%;
  height: 50px;
`;

export const LogoImg = styled.img`
  width: 84px;
`;

export const LogoDiv = styled.div`
display: grid;
width: ${props=> props.tamanho};
height: 84px;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
`

export const LogoPedaco = styled.div`
background-color: ${props=> props.cor};
border-radius: ${props=> props.direcao};
`