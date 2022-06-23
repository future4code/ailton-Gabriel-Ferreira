import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const MidContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
  color: white;
  border: 1px solid #E36000;
  width: 20%;
  height: 60%;
  gap: 24px;
  padding: 64px 0px;
  border-radius: 12px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ButtonContainer = styled.div`
display: flex;
gap: 4px;
`

export default class TelaCadastro extends Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "gabriel-ferreira-ailton",
          },
        }
      )
      .then((response) => {
        alert("Usuario cadastrado com sucesso!");
      })
      .catch((error) => {
        alert("Não foi possivel cadastrar o usuario, tente novamente");
      });
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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChangeName = (event) => {
    this.setState({ inputName: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  render() {
    return (
      <MidContainer>
        <h2>Cadastro LabeUsers</h2>
        <FormContainer>
          <input
            placeholder="Nome"
            value={this.state.inputName}
            onChange={this.onChangeName}
          />
          <input
            placeholder="E-mail"
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}
            type={"email"}
          />
        </FormContainer>
        <ButtonContainer>          
          <button onClick={this.createUser}>Enviar Cadastro</button>
          <button onClick={this.props.screenZero}>Voltar a tela inicial</button>
        </ButtonContainer>
      </MidContainer>
    );
  }
}
