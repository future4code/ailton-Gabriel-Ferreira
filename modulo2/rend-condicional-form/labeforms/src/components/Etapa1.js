import React, { Component } from "react";
import styled from "styled-components";

const ContainerTotal = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 90%;
`;

const ContainerMid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  height: 45%;
`;

export default class Etapa1 extends Component {
  render() {
    return (
      <ContainerTotal>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <ContainerMid>
          <div>
            <label htmlFor="qual-seu-nome">Nome: </label>
            <input id="qual-seu-nome"></input>
          </div>
          <div>
            <label htmlFor="qual-sua-idade">Idade: </label>
            <input id="qual-sua-idade"></input>
          </div>
          <div>
            <label htmlFor="qual-seu-email">E-mail: </label>
            <input id="qual-seu-email"></input>
          </div>
        </ContainerMid>
      </ContainerTotal>
    );
  }
}
