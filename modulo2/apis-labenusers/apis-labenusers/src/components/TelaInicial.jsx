import styled from "styled-components";
import React, { Component } from "react";

const MidContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 64px 0px;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
  border: 1px solid #E36000;
  width: 20%;
  height: 60%;
  gap: 24px;
  border-radius: 12px;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 50%;
align-items: center;
flex-direction: column;
gap: 4px;
`
const OptionsButton = styled.button`
border: none;
padding: 4px;
border-radius: 4px;
color: #000000;
background-color: #ffffff ;
:hover {
  cursor: pointer;
}
`

export default class TelaInicial extends Component {
  render() {
    return (
        <MidContainer>
          <h2>LabeUsers</h2>
          <p>Cadastre-se para acessar a database de usuarios</p>
          <ButtonContainer>
            <OptionsButton onClick={this.props.screenTwo}>Fazer Login</OptionsButton>
            <p>Ou</p>
            <OptionsButton onClick={this.props.screenOne}>Criar conta</OptionsButton>
          </ButtonContainer>
        </MidContainer>
    )
  }
}

