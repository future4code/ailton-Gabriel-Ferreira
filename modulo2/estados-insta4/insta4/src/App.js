import { toHaveStyle } from "@testing-library/jest-dom";
import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
`;

const InputsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px solid black;
width: 300px;
gap: 24px;
padding: 12px 0px;
margin: 12px 0px;
`
const InputsEstilizados = styled.input`
width: 75%;
`


class App extends React.Component {
  state = {
    inputNomeUsuario: "",
    inputPFP: "",
    inputFotoPost: "",
    componentePost: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/id/10/50/50",
        fotoPost: "https://picsum.photos/id/11/200/200",
      },
      {
        nomeUsuario: "Jose",
        fotoUsuario: "https://picsum.photos/id/12/50/50",
        fotoPost: "https://picsum.photos/id/13/200/200",
      },
      {
        nomeUsuario: "Dionisio",
        fotoUsuario: "https://picsum.photos/id/14/50/50",
        fotoPost: "https://picsum.photos/id/15/200/200",
      },
    ],
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: "https://picsum.photos/id/" + this.state.inputPFP + "/50/50",
      fotoPost:
        "https://picsum.photos/id/" + this.state.inputFotoPost + "/200/200",
    };
    const novoPosts = [...this.state.componentePost, novoPost];
    this.setState({ componentePost: novoPosts });
    this.setState({ inputNomeUsuario: "" });
    this.setState({ inputPFP: "" });
    this.setState({ inputFotoPost: "" });
  };

  onChangeNome = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };
  onChangeFotoUsuario = (event) => {
    this.setState({ inputPFP: event.target.value });
  };
  onChangeFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value });
  };

  render() {
    const postFormata = this.state.componentePost.map((dados, index) => {
      return (
        <Post
          key={index}
          nomeUsuario={dados.nomeUsuario}
          fotoUsuario={dados.fotoUsuario}
          fotoPost={dados.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <InputsContainer>
          <InputsEstilizados
            value={this.state.inputPFP}
            onChange={this.onChangeFotoUsuario}
            type="number"
            placeholder="Sua foto"
          ></InputsEstilizados>
          <InputsEstilizados
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeNome}
            placeholder="Seu usuario"
          ></InputsEstilizados>
          <InputsEstilizados
            value={this.state.inputFotoPost}
            onChange={this.onChangeFotoPost}
            type="number"
            placeholder="Foto post"
          ></InputsEstilizados>
          <button onClick={this.adicionaPost}>Aperte</button>
        </InputsContainer>
        {postFormata}
      </MainContainer>
    );
  }
}

export default App;
