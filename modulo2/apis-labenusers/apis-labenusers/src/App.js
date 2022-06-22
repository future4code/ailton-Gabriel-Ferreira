import TelaCadastro from "./components/TelaCadastro";
import TelaInicial from "./components/TelaInicial";
import styled from "styled-components";
import React, { Component } from "react";
import TelaLogin from "./components/TelaLogin";
import TelaUsuarios from "./components/TelaUsuarios";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
  width: 100vw;
  height: 100vh;
`;

export default class App extends Component {
  state = {
    actualScreen: 3,
    canAccess: false,
  };

  setAcces = () => {
    this.setState ({canAccess: true})
  }

  changeScreenToZero = () => {
    this.setState({ actualScreen: 0 });
  };
  changeScreenToOne = () => {
    this.setState({ actualScreen: 1 });
  };
  changeScreenToTwo = () => {
    this.setState({ actualScreen: 2 });
  };
  changeScreenToThree = () => {
    if(this.state.canAccess === true) {
    this.setState({ actualScreen: 3 });
    }
  };

  changeScreen = () => {
    switch (this.state.actualScreen) {
      case 0:
        return (
          <TelaInicial
            screenOne={this.changeScreenToOne}
            screenTwo={this.changeScreenToTwo}
          />
        );
      case 1:
        return (
          <TelaCadastro
            screenZero={this.changeScreenToZero}
            screenTwo={this.changeScreenToTwo}
            screenProps={this.state.actualScreen}
          />
        );
      case 2:
        return (
          <TelaLogin
            screenZero={this.changeScreenToZero}
            screenOne={this.changeScreenToOne}
            screenThree={this.changeScreenToThree}
            screenProps={this.state.actualScreen}
            access={this.setAcces}
          />
        );
        case 3:
          return (
            <TelaUsuarios
            screenZero={this.changeScreenToZero}
            deleteUser={this.deleteUser}
            />               
          );
    }
  };

  render() {
    return <Container>{this.changeScreen()}</Container>;
  }
}