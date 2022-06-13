import React, { Component } from "react";
import styled from "styled-components";
import DadosGerais from "./components/DadosGerais";
import DadosSuperior from "./components/DadosSuperior";
import DadosComplementares from "./components/DadosComplementares";
import TelaFinal from "./components/TelaFinal";

const ContainerTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
  width: 100vw;
  height: 100vh;
`;

export default class App extends Component {
  state = {
    telaAtual: "dados-gerais",
  };

  mudaTela = () => {
    console.log('Mudou')
    if (this.state.telaAtual === "dados-gerais") {
      return (
        <DadosGerais
          mudaTela={this.mudaParaEnsinoSuperior}
        />
      );
    } else if (this.state.telaAtual === "dados-superior") {
      return (
        <DadosSuperior
          mudaTela={this.mudaParaDadosComplementares}
          mudaTela2={this.mudaParaDadosGerais}
        />
      );
    } else if (this.state.telaAtual === "dados-complementares") {
      return (
        <DadosComplementares
          mudaTela={this.mudaParaEnsinoSuperior}
          mudaTela2={this.mudaParaTelaFinal}
        />
      );
    } else if (this.state.telaAtual === "tela-final") {
      return (
        <TelaFinal
          mudaTela={this.mudaParaDadosComplementares}
          mudaTela2={this.mudaParaDadosGerais}
        />
      );
    }
  };

  mudaParaDadosGerais = () => {
    this.setState({ telaAtual: "dados-gerais" });
  };

  mudaParaEnsinoSuperior = () => {
    this.setState({ telaAtual: "dados-superior" });
  };

  mudaParaDadosComplementares = () => {
    this.setState({ telaAtual: "dados-complementares" });
  };

  mudaParaTelaFinal = () => {
    this.setState({ telaAtual: "tela-final" });
  };

  render() {
    return <ContainerTotal>
      {this.mudaTela()}
      </ContainerTotal>
  }
}
