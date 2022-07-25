import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 132px 0px;
  gap: 32px;
  width: 100%;
  height: 100vh;
`;

export const LogoImg = styled.img`
  width: 84px;
`;

export const LogoContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 4px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
`;

export const ContainerTexto = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContainerBotao = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
