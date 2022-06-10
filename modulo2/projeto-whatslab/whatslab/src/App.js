import React from "react";
import "./App.css";
import styled from "styled-components";
import Mensagem from "./components/Componente Mensagem/Mensagem";
import Contato from "./components/Componente Contato/Contato";

const TelaTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: min-content;
  background-color: gray;
`;

const WhatsLab = styled.div`
  display: flex;
  height: 95%;
  width: 80%;
  background-color: white;
`;

const Contatos = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30vw;
  min-width: min-content;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const BotaoMostrarEsconder = styled.button`
background-color: lime;
width: 100%;
height: 30px;
:hover{
  background-color: limegreen;
  cursor: pointer;
}
`
const BotaoMostrarEsconderMini = styled.button`
background-color: lime;
width: 50px;
height: 40px;
:hover{
  background-color: limegreen;
  cursor: pointer;
}
`

const Mensagens = styled.section`
  display: grid;
  grid-template-rows: 10% 85% 5%;
  grid-template-columns: 100%;
  border: 1px solid darkgray;
  width: 100%;
  @media only screen and (max-width: 480px) {
    grid-template-rows: 10% 75% 15%;
    width: 100%;
  }
`;

const MensagensPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: #efeae2;
  overflow-y: scroll;
`;

const InputMensagem = styled.input`
  width: 60%;
  height: 30px;
  border-radius: 20px 20px 20px 20px;
  padding: 0px 4px;
  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;

const InputUsuario = styled.input`
  width: 20%;
  height: 30px;
  border-radius: 20px 20px 20px 20px;
  padding: 0px 4px;
  @media only screen and (max-width: 480px) {
    width: 50%;
  }
`;

const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: #f0f2f5;
  border: 1px solid darkgray;
  width: 100%;
  padding: 8px;
  button {
    height: 25px;
    width: 75px;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const ContainerUsuario = styled.div`
  padding: 0px 12px;
  gap: 12px;
  border: 1px solid darkgray;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const InputNomeContato = styled.input`
  width: 20%;
`;

class App extends React.Component {
  state = {
    valorInputContatoNome: "",
    valorInputContatoFoto: "",
    contatos: [
      {
        fotoContato: "237",
        nomeContato: "Peçanha",
      },
      {
        fotoContato: "227",
        nomeContato: "Josefino",
      },
      {
        fotoContato: "267",
        nomeContato: "Jamelao",
      },
      {
        fotoContato: "129",
        nomeContato: "analu",
      },
    ],
    valorInputUsuario: "",
    valorInputMensagem: "",
    mensagem: [
      { usuario: "Zezin", mensagem: "Oi tudo bem?" },
      { usuario: "Joseph", mensagem: "Sarve" },
      { usuario: "eu", mensagem: "Fala pessoar"},
    ],
    contatoShow: true,
  };

  adicionaContato = () => {
    console.log(this.state.contatos);
    if (
      this.state.valorInputContatoNome === "" &&
      this.state.valorInputContatoFoto === ""
    ) {
      alert("Insira um Foto ID e contato");
    } else if (
      this.state.valorInputContatoNome === "" &&
      this.state.valorInputContatoFoto !== ""
    ) {
      alert("Insira um nome de contato");
    } else if (
      this.state.valorInputContatoNome === "" &&
      this.state.valorInputContatoFoto !== ""
    ) {
      alert("Insira um Foto ID");
    } else {
      const novoContato = {
        fotoContato: this.state.valorInputContatoFoto,
        nomeContato: this.state.valorInputContatoNome,
      };
      const novoContatos = [...this.state.contatos, novoContato];
      this.setState({ contatos: novoContatos });
      this.setState({ valorInputContatoFoto: "" });
      this.setState({ valorInputContatoNome: "" });
    }
  };

  onChangeInputContatoNome = (event) => {
    this.setState({ valorInputContatoNome: event.target.value });
  };

  onChangeInputContatoFoto = (event) => {
    this.setState({ valorInputContatoFoto: event.target.value });
  };

  adicionaMensagem = () => {
    if (
      this.state.valorInputUsuario === "" &&
      this.state.valorInputMensagem === ""
    ) {
      alert("Insira um nome de usuario e mensagem");
    } else if (
      this.state.valorInputUsuario === "" &&
      this.state.valorInputMensagem !== ""
    ) {
      alert("Insira um nome de usuario");
    } else if (
      this.state.valorInputMensagem === "" &&
      this.state.valorInputUsuario !== ""
    ) {
      alert("Insira uma mensagem");
    } else {
      const novaMensagem = {
        usuario: this.state.valorInputUsuario,
        mensagem: this.state.valorInputMensagem,
      };
      const novoMensagens = [...this.state.mensagem, novaMensagem];
      this.setState({ mensagem: novoMensagens });
      this.setState({ valorInputMensagem: "" });
    }
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  onKeyPressEnter = (event) => {
    if (event.key === "Enter") {
      if (
        this.state.valorInputUsuario === "" &&
        this.state.valorInputMensagem === ""
      ) {
        alert("Insira um nome de usuario e mensagem");
      } else if (
        this.state.valorInputUsuario === "" &&
        this.state.valorInputMensagem !== ""
      ) {
        alert("Insira um nome de usuario");
      } else if (
        this.state.valorInputMensagem === "" &&
        this.state.valorInputUsuario !== ""
      ) {
        alert("Insira uma mensagem");
      } else {
        const novaMensagem = {
          usuario: this.state.valorInputUsuario,
          mensagem: this.state.valorInputMensagem,
        };
        const novoMensagens = [...this.state.mensagem, novaMensagem];
        this.setState({ mensagem: novoMensagens });
        this.setState({ valorInputMensagem: "" });
        this.setState({ valorInputUsuario: "" });
      }
    }
  };

  mostrarEsconder = () => {
    console.log('Clicou')
    this.setState ({contatoShow: !this.state.contatoShow})
  }

  render() {
    let contatoShow = []
    if (this.state.contatoShow === true) {
      contatoShow = <Contatos>
          <BotaoMostrarEsconder onClick={this.mostrarEsconder}>Mostrar/Esconder Contatos</BotaoMostrarEsconder>
        <ContainerInputs>
          <InputNomeContato
            value={this.state.valorInputContatoFoto}
            onChange={this.onChangeInputContatoFoto}
            placeholder="Foto ID"
          />
          <input
            value={this.state.valorInputContatoNome}
            onChange={this.onChangeInputContatoNome}
            placeholder="Nome do contato"
          />
          <button onClick={this.adicionaContato}>Contato</button>
        </ContainerInputs>
        <Contato propContato={this.state.contatos} />
      </Contatos>
    } else {
      contatoShow = <BotaoMostrarEsconderMini onClick={this.mostrarEsconder}>Mostrar/Esconder Contatos</BotaoMostrarEsconderMini>
        }

    return (
      <TelaTotal>
        <WhatsLab>
          {contatoShow}
          <Mensagens>
            <ContainerUsuario>
              <img src="https://picsum.photos/id/237/1000/1000" />
              <p>Peçanha</p>
            </ContainerUsuario>
            <MensagensPart>
              <Mensagem propUsuario={this.state.mensagem} />
            </MensagensPart>
            <ContainerInputs>
              <InputUsuario
                value={this.state.valorInputUsuario}
                onChange={this.onChangeInputUsuario}
                placeholder="Usuario"
              />
              <InputMensagem
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagem}
                placeholder="Mensagem"
                onKeyPress={this.onKeyPressEnter}
              />
              <button onClick={this.adicionaMensagem}>Enviar</button>
            </ContainerInputs>
          </Mensagens>
        </WhatsLab>
      </TelaTotal>
    );
  }
}

export default App;
