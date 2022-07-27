import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`;

export const Chamada = styled.h1`
  font-size: 2rem;
  color: #373737;
  margin: 0 auto;
  width: 85%;
  margin-bottom: 192px;
`;

export const ContainerTermos = styled.div`
  margin: 0 auto;
  width: 85%;
`;

export const Texto = styled.span`
  font-size: 0.9rem;
  cursor: ${(props) => props.cursor};
  color: ${(props) => props.cor};
`;

export const ContainerCheckbox = styled.div`
display: flex;
width: 85%;
margin: 0 auto;
gap: 10px;
>span {
    font-size: 0.9rem;
}
>input {
    width: 18px;
    background-color: blue;
}
`

export const ContainerTermoECheckbox = styled.section`
display: flex;
flex-direction: column;
gap: 18px;
`

export const ContainerBotao = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin-top: 26px;
`