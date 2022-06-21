import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const MidContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  width: 20%;
  height: 60%;
  gap: 24px;
  padding: 64px 0px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

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
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
        headers: {
            Authorization: "gabriel-ferreira-ailton"
        }
    }).then((response) => {
        alert('Usuario cadastrado com sucesso!')
    }).catch((error)=> {
        alert('Não foi possivel cadastrar o usuario, tente novamente')
    })
  };

//   deleteUser = (id) => {
//     axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${id}`,{
//         headers: {
//             Authorization: "gabriel-ferreira-ailton"
//         }
//     }).then((response) => {
//         alert('Usuario deletado')
//     }).catch((error)=> {
//         alert('Não foi possivel deletar o usuario, tente novamente')
//     })
//   };

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
        headers: {
            Authorization: "gabriel-ferreira-ailton"
        }
    }).then((response) => {
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    })
  }

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
          <label>
            Nome:
            <input value={this.state.inputName} onChange={this.onChangeName} />
          </label>
          <label>
            Email:
            <input
              value={this.state.inputEmail}
              onChange={this.onChangeEmail}
              type={"email"}
            />
          </label>
        </FormContainer>
          <button onClick={this.createUser}>Enviar Cadastro</button>
          <button onClick={this.getAllUsers}>Teste</button>
        <button onClick={this.props.screenZero}>Voltar a tela inicial</button>
      </MidContainer>
    );
  }
}
