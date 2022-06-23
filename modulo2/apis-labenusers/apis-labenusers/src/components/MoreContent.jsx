import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
  width: 60%;
  height: fit-content;
  gap: 4px;
  padding: 4px;
`;

export default class MoreContent extends Component {
  state = {
    editing: false,
    inputName: "",
    inputEmail: "",
  };

  editUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    axios
      .put(url, body, { headers: { Authorization: "gabriel-ferreira-ailton" } })
      .then((response) => {
        console.log(response);
        this.props.details()
      });
  };

  changeEditing = () => {
    this.setState({ editing: !this.state.editing });
  };

  onChangeName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  render() {
    return (
      <Container>
        <p>{this.props.infos.name}</p>
        <p>{this.props.infos.email}</p>
        {this.state.editing ? (
          <button onClick={this.changeEditing}>Cancelar Edição</button>
        ) : (
          <button onClick={this.changeEditing}>Editar</button>
        )}
        {this.state.editing && (
          <>
            <input placeholder="Novo nome de usuario" value={this.state.inputName} onChange={this.onChangeName}/>
            <input placeholder="Novo E-mail" value={this.state.inputEmail} onChange={this.onChangeEmail}/>
            <button onClick={() => this.editUser(this.props.infos.id)}>
              Enviar Alterações
            </button>
          </>
        )}
        <button onClick={this.props.showing}>Esconder</button>
      </Container>
    );
  }
}
