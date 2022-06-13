import React, { Component } from "react";
import styled from "styled-components";

const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  height: 60%;
  width: 20%;
  gap: 20px;
`;

const ContainerMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: orangered;
  color: white;
  gap: 8px;
  border-radius: 5px;
  width: 70%;
  height: 20%;
`;

const ContainerDiv = styled.div`
  display: flex;
`

const InputEstilizado = styled.input`
  width: 75%;
`;
const Titulo = styled.p`
  font-size: 1.5rem;
`;

const LabelEstilizado = styled.label`
width: 60px;
`

export default class DadosGerais extends Component {
    state = {
        valorInputNome: '',
        valorInputIdade: '',
        valorInputEmail: '',
        podeProsseguir: false,
    }

    onChangeInputNome = (event) => {
        console.log(event.target.value)
        this.setState({ valorInputNome: event.target.value });
      };
    
      onChangeInputIdade = (event) => {
        this.setState({ valorInputIdade: event.target.value });
      };
    
      onChangeInputEmail = (event) => {
        this.setState({ valorInputEmail: event.target.value });
      };

  render() {
    let verifica
    let preencheu
    if (this.state.valorInputNome !== "" && this.state.valorInputIdade !== "" && this.state.valorInputEmail !== "") {
        preencheu = true
    }
    else {
        preencheu = false
    }

    if (preencheu === false) {
        verifica = <p>Preencha os campos para prosseguir</p>
    }
    else {
        verifica = <button onClick={this.props.mudaTela}>Proxima Pagina</button>
    }

    return (
      <ContainerInputs>
        <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
        <ContainerMid>
          <ContainerDiv>
            <LabelEstilizado htmlFor="nome">Nome:</LabelEstilizado>
            <InputEstilizado value={this.state.valorInputNome} onChange={this.onChangeInputNome} id="nome"/>
          </ContainerDiv>
          <ContainerDiv>
            <LabelEstilizado htmlFor="idade">Idade:</LabelEstilizado>
            <InputEstilizado value={this.state.valorInputIdade} onChange={this.onChangeInputIdade} htmlFor="idade" />
          </ContainerDiv>
          <ContainerDiv>
            <LabelEstilizado htmlFor="e-mail">E-mail:</LabelEstilizado>
            <InputEstilizado value={this.state.valorInputEmail} onChange={this.onChangeInputEmail} id="e-mail" />
          </ContainerDiv>
        </ContainerMid>
        <label htmlFor="escolaridade">Qual seu nível de escolaridade:</label>
        <select name="escolaridade" id="escolaridade">
          <option value="Ensino Fundamental">Ensino Fundamental</option>
          <option value="Ensino Médio">Ensino Médio</option>
          <option value="Ensino superior incompleto">
            Ensino Superior Incompleto
          </option>
          <option value="Ensino superior completo">
            Ensino Superior Completo
          </option>
        </select>
        {verifica}
      </ContainerInputs>
    );
  }
}