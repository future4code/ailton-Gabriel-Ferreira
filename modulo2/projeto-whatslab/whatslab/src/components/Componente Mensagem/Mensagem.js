import React from "react";
import styled from "styled-components";

const MensagemLayoutVerde = styled.p`
  font-weight: bold;
  display: flex;
  gap: 12px;
  width: fit-content;
  max-width: 80%;
  padding: 4px;
  border-radius: 10px 10px 0px 10px;
  margin: 8px;
  background-color: #d9fdd3;
  border: 1px solid darkgray;
  word-wrap: break-word;
  word-break: break-all;
`;
const MensagemLayoutBranco = styled.p`
  font-weight: bold;
  display: flex;
  gap: 12px;
  width: fit-content;
  border: 1px solid darkgray;
  max-width: 80%;
  padding: 4px;
  border-radius: 10px 10px 0px 10px;
  margin: 8px;
  background-color: white;
  word-wrap: break-word;
  word-break: break-all;
`;
const MensagemFinalEsq = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: end;
`;
const MensagemFinalDir = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  text-align: right;
`;
const Mensagem = (props) => {
  const mensagensOut = props.propUsuario.map((dado, index) => {
    if (dado.usuario.toLowerCase() == "eu") {
      return (
        <MensagemFinalDir key={index}>
          <MensagemLayoutVerde>
            {dado.mensagem}
          </MensagemLayoutVerde>
        </MensagemFinalDir>
      );
    }
    return (
      <MensagemFinalEsq key={index}>
        <MensagemLayoutBranco>
          {dado.usuario}: {dado.mensagem}
        </MensagemLayoutBranco>
      </MensagemFinalEsq>
    );
  });
  return <>{mensagensOut}</>;
};

export default Mensagem;
