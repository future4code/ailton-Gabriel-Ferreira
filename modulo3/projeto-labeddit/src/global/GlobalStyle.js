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
  width: ${props=> props.tamanho};
  height: 50px;
`;

export const LogoImg = styled.img`
  width: 84px;
`;

export const Formulario = styled.form`
display: flex;
flex-direction: column;
gap: 8px;
margin-bottom: 44px;
`

export const BotaoNav = styled.button`
background: none;
border: none;
color: #4088CB;
font-size: 1rem;
font-weight: 600;
`

export const Barra = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #ededed;
  margin-bottom: 30px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33%;
  }
`;