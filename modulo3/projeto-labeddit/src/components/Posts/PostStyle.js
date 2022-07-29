import styled from "styled-components";

export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 36px;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Card = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 85%;
  word-break: break-all;
  background-color: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
`;

export const Usuario = styled.span`
  color: #6f6f6f;
  font-size: 12px;
`;

export const Texto = styled.p`
  font-size: 18px;
  line-height: 23px;
`;

export const ContainerIcones = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  height: 24px;
  width: fit-content;
  border: 1px solid #e0e0e0;
  padding: 10px 5px;
  border-radius: 12px;
`;

export const Icone = styled.img`
  width: 14px;
  padding-top: ${(props) => props.ajuste};
  background-color: ${props=> props.color};
`;

export const ContainerNumeros = styled.div`
  display: flex;
  gap: 12px;
`;

export const Count = styled.span`
color: #6F6F6F;
font-size: 12px;
`

export const Corpo = styled.p`
color: #141414;
`