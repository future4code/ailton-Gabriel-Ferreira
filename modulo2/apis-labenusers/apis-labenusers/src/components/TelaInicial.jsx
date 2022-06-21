import styled from "styled-components";
import React, { Component } from "react";

const MidContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 64px 0px;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  width: 20%;
  height: 60%;
  gap: 24px;
`;

const StyledButton = styled.button`
width: 80px;
`

export default class TelaInicial extends Component {
  render() {
    return (
        <MidContainer>
          <h2>Bem Vindo ao LabeUsers</h2>
          <div>
            <StyledButton onClick={this.props.screenTwo}>Fazer Login</StyledButton>
            <StyledButton onClick={this.props.screenOne}>Criar conta</StyledButton>
          </div>
        </MidContainer>
    )
  }
}

