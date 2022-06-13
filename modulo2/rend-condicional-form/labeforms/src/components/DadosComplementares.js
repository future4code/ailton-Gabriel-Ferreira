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

const Titulo = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const InputEstilizado = styled.input`
  width: 80%;
`;

const ContainerTudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orangered;
  color: white;
  padding: 4px;
  border-radius: 10px;
  border: 1px solid black;
`

const ContainerFinal = styled.div`
  display: flex;
  align-items: center;
`

const SelectEstilizado = styled.select`
text-align: center;
width: 204px;
background-color: white;
`

export default class DadosComplementares extends Component {
    state = {
        valorInputQualUnidade: '',
        podeProsseguir: false,
    }
    onChangeInput = (event) => {
        this.setState({valorInputQualUnidade: event.target.value})
    }
  render() {
    let verifica
    let preencheu
    if (this.state.valorInputQualCu !== "" && this.state.valorInputQualUnidade !== "") {
        preencheu = true
    }
    else {
        preencheu = false
    }

    if (preencheu === false) {
        verifica = <p>Preencha os campos para proseeguir</p>
    }
    else {
        verifica = <button onClick={this.props.mudaTela2}>Proxima Pagina</button>
    }
    return (
      <ContainerInputs>
        <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
        <ContainerTudo>
          <label htmlFor="por-que">
            Por que você não terminou um curso de graduação:{" "}
          </label>
          <InputEstilizado value={this.state.valorInputQualUnidade} onChange={this.onChangeInput} id="por-que" />
          <label htmlFor="algum-curso">Você fez algum curso complementar: </label>
          <SelectEstilizado name="cursos" id="algum-curso">
          <option value="nenhum">Nenhum</option>
            <option value="ingles">Curso de inglês</option>
            <option value="tecnico">Curso Técnico</option>
          </SelectEstilizado>
        </ContainerTudo>
        <ContainerFinal>
          <button onClick={this.props.mudaTela}>Etapa Anterior</button>
          {verifica}
        </ContainerFinal>
      </ContainerInputs>
    );
  }
}