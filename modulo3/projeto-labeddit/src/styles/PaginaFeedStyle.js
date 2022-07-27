import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const Linha = styled.div`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #4088cb;
  width: 85%;
  height: 2px;
`;

export const CaixaDeTexto = styled.textarea`
  width: ${props=> props.largura};
  height: ${props=> props.altura};
  background: #ededed;
  border: none;
  outline: none;
  border-radius: 12px;
  padding: ${props=> props.distanciamento}
`;

export const InputELabel = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 85%;
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0px;
  color: #6F6F6F;
  font-size: 18px;
  padding: ${props=> props.distanciamento};
`;