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
  text-align: center;
  font-size: 1.5rem;
`;

const ContainerMid = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
padding: 8px;
color: white;
border-radius: 10px;
background-color: orangered;
text-align: center;
border: 1px solid black;
`

const ContainerBotao = styled.div`
display: flex;
align-items: center;
gap: 4px;
`

export default class DadosSuperior extends Component {
    state = {
        valorInputQualCu: '',
        valorInputQualUnidade: '',
        podeProsseguir: false,
    }
    onChangeQualCu = (event) => {
        this.setState({valorInputQualCu: event.target.value})
    }
    onChangeQualUnidade = (event) => {
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
        verifica = <button onClick={this.props.mudaTela}>Proxima Pagina</button>
    }

    return (
      <ContainerInputs>
        <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
        <ContainerMid>
        <div>
          <label htmlFor="qual-curso">Qual Curso: </label>
          <input value={this.state.valorInputQualCu} onChange={this.onChangeQualCu}></input>
        </div>
        <div>
          <label htmlFor="qual-unidade">Qual unidade de ensino: </label>
          <input value={this.state.valorInputQualUnidade} onChange={this.onChangeQualUnidade}></input>
        </div>
        </ContainerMid>
        <ContainerBotao>
        <button onClick={this.props.mudaTela2}>Etapa Anterior</button>
        {verifica}
        </ContainerBotao>
      </ContainerInputs>
    );
  }
}