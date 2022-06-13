import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: white;
  border: 1px solid black;
  height: 60%;
  width: 20%;
  gap: 20px;
`;

const Titulo = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

export default class TelaFinal extends Component {
  render() {
    return (
      <ContainerInputs>
        <Titulo>O FORMULÁRIO ACABOU</Titulo>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
        <div>
        <button onClick={this.props.mudaTela}>Voltar para a etapa anterior</button>
        <button onClick={this.props.mudaTela2}>Voltar para o inicio</button>
        </div>
      </ContainerInputs>
    )
  }
}