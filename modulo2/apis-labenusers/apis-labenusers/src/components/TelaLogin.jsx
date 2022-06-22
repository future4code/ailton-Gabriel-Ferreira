import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

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
  border-radius: 25px;
  gap: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 12px;
  border-radius: 12px;
  gap: 2px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export default class TelaLogin extends Component {
  state = {
    inputLogin: "",
    inputEmail: "",
    allUsers: [],
  };
  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "gabriel-ferreira-ailton",
          },
        }
      )
      .then((response) => {
        if (
          response.data
            .map((data) => {
              return data.name;
            })
            .includes(this.state.inputLogin.toLowerCase())
        ) {
          this.props.access();
          this.props.screenThree();
        } else {
          alert("Login Invalido");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  onChangeInputLogin = (event) => {
    this.setState({ inputLogin: event.target.value });
  };
  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  render() {
    return (
      <MidContainer>
        {this.props.access ? (
          <>
            <h2>Realizar Login</h2>
            <InputContainer>
              <input
                value={this.state.inputLogin}
                onChange={this.onChangeInputLogin}
                placeholder="Login"
              />
              <input
                value={this.state.inputEmail}
                onChange={this.onChangeInputEmail}
                placeholder="E-mail"
              />
              <input placeholder="Senha" />
              <button onClick={this.getAllUsers}>Logar</button>
            </InputContainer>
            <ButtonContainer>
              <button onClick={this.props.screenOne}>Cadastrar-se</button>
              <button onClick={this.props.screenZero}>
                Retornar ao inicio
              </button>
            </ButtonContainer>
          </>
        ) : (
          <div>Acessar</div>
        )}
      </MidContainer>
    );
  }
}
