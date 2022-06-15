import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: darkgray;
`;

const ContainerInputs = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
`;
const ContainerMid = styled.div`
  display: flex;
  gap: 12px;
`;
const ContainerInputsInter = styled.div`
  display: flex;
`;
const ContainerConcluidas = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 4px;
  background-color: lime;
  overflow: auto;
  width: 80%;
  height: 30%;
  margin: 2px 0px;
  border-radius: 12px;
`;
const ContainerPendentes = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 4px;
  border-radius: 12px;
  background-color: orange;
  overflow: auto;
  width: 80%;
  height: 30%;
  margin: 2px 0px;
  border-radius: 12px;
`;
const Cursozin = styled.li`
  border: 1px solid black;
  padding: 4px;
  border-radius: 8px;
  margin: 1px 0px;
  background-color: white;
  button {
    margin: 0px 4px;
  }
  hover: {
    cursor: pointer;
  }
`;

export default class App extends Component {
  state = {    
    valorInputSearch: "",
    valorInputEditState: "",
    valorInput: "",
    taskClone: [],
    pesquisando: false,
    tarefas: [
      {
        id: 2,
        texto: "Texto da tarefa 1",
        completa: false,
        editando: false,
        valorInputEdit: "Texto da tarefa 1",
      },
      {
        id: 1,
        texto: "Texto da tarefa 2",
        completa: true,
        editando: false,
        valorInputEdit: "Texto da tarefa 2",
      },
    ],
  };

  componentDidMount () {
    if (localStorage.getItem('tasks')) {
      const newVariavel = localStorage.getItem('tasks')      
      const newArr = JSON.parse(newVariavel)
      this.setState({tarefas: newArr})
    }
  }

  componentDidUpdate () {
    localStorage.setItem('tasks', JSON.stringify(this.state.tarefas))
  }

  selectTarefa = (id) => {
    const trocavalor = this.state.tarefas
      .filter((dados) => {
        return id === dados.id;
      })
      .map((dados) => {
        return { id: dados.id, texto: dados.texto, completa: !dados.completa, editando: dados.editando, valorInputEdit: dados.texto };
      });
    const arrayTarefa = this.state.tarefas.filter((dados) => {
      return id !== dados.id;
    });
    arrayTarefa.push(trocavalor[0]);
    this.setState({ tarefas: arrayTarefa });
  };

  onChangeInput = (event) => {
    this.setState({ valorInput: event.target.value });
  };

  addTarefa = () => {
    const newArr = [...this.state.tarefas];
    const newTask = {
      id: Date.now(),
      texto: this.state.valorInput,
      completa: false,
      editando: false,
      valorInputEdit: "",
    };
    newArr.push(newTask);
    this.setState({ tarefas: newArr });
  };

  removeTarefa = (id) => {
    const arrayTarefa = this.state.tarefas.filter((dados) => {
      return id !== dados.id;
    });
    this.setState({ tarefas: arrayTarefa});
  }

  setEditando = (id) => {
    const newArray = this.state.tarefas.map((dados)=>{
      if (dados.id === id) {
        return {id: dados.id, texto: dados.texto, completa: dados.completa, editando: !dados.editando, valorInputEdit: dados.texto}
      } else {
        return dados
      }
    })
    this.setState({tarefas: newArray})
  }

  onChangeInputEdit = (event) => {
    const newArray = this.state.tarefas.filter((dados)=>{
      return dados
    }).map((dados)=>{
      if (dados.editando) {
        return { id: dados.id, texto: dados.texto, completa: dados.completa, editando: dados.editando, valorInputEdit: event.target.value }
      } else {
        return { id: dados.id, texto: dados.texto, completa: dados.completa, editando: dados.editando, valorInputEdit: dados.valorInputEdit }
      }
    })
    this.setState({tarefas: newArray})
  }

  onChangeInputSearch = (event) => {
    if (event.target.value !== "") {
    this.setState({valorInputSearch: event.target.value})
    const filterArr = this.state.tarefas.filter((dados)=>{
      return dados.texto.includes(this.state.valorInputSearch)
    })
    this.setState({tarefas: filterArr})
  } else {
    this.setState ({tarefas: this.state.taskClone, valorInputSearch: ""})
  }
}

onClickInputSearch = () => {
  this.setState ({taskClone: this.state.tarefas})
}

  editTask = (id) => {
    const newArray = this.state.tarefas.map((dados)=>{
      if (dados.id === id) {
        return { id: dados.id, texto: dados.valorInputEdit, completa: dados.completa, editando: !dados.editando, valorInputEdit: dados.valorInputEdit }
      } else {
        return { id: dados.id, texto: dados.texto, completa: dados.completa, editando: dados.editando, valorInputEdit: dados.valorInputEdit }
      }
    })
    this.setState({tarefas: newArray})
  }

  clearAll = () => {
    this.setState({tarefas: []})
  }

  onClickFilter = () => {
    this.setState({pesquisando: !this.state.pesquisando})    
  }

  render() {
    return (
      <Container>
        <ContainerInputs>
          <ContainerMid>
            <ContainerInputsInter>
              <p>Nova tarefa:</p>
              <input
                value={this.state.valorInput}
                onChange={this.onChangeInput}
              />
              <button onClick={this.addTarefa}>Adicionar Tarefa</button>
            </ContainerInputsInter>
          </ContainerMid>
          <p>Clique para marcar como concluida</p>
          <div>
            <input onClick={this.onClickInputSearch} value={this.state.valorInputSearch} onChange={this.onChangeInputSearch}/>
            <button onClick={this.onClickFilter}>Inicia Pesquisa</button>
          </div>
          <ContainerConcluidas>
            <p>Tarefas Concluidas:</p>
            {this.state.tarefas
              .filter((dados) => {
                return dados.completa === true;
              })
              .map((dados) => {
                return (
                  <Cursozin key={dados.id}>
                    {dados.texto}
                    {
                    dados.editando && <><input value={this.state.tarefas[this.state.tarefas.indexOf(dados)].valorInputEdit} onChange={this.onChangeInputEdit}/>
                    <button onClick={()=>this.setEditando(dados.id)}>Cancelar</button>
                    <button onClick={()=>this.editTask(dados.id)}>Enviar</button></>
                    }
                    {
                    dados.editando || <><button onClick={()=>this.setEditando(dados.id)}>Editar</button>                    
                    <button onClick={()=>this.selectTarefa(dados.id)}>Tarefa não concluida</button>
                    <button onClick={()=>this.removeTarefa(dados.id)}>Remover Tarefa</button></>
                    }
                  </Cursozin>
                );
              })}
          </ContainerConcluidas>

          <ContainerPendentes>
            <p>Tarefas Pendentes:</p>
            {this.state.tarefas
              .filter((dados) => {
                return dados.completa === false;
              })
              .map((dados) => {
                return (
                  <Cursozin key={dados.id}>
                    {dados.texto}
                    {
                    dados.editando && <><input value={this.state.tarefas[this.state.tarefas.indexOf(dados)].valorInputEdit} onChange={this.onChangeInputEdit}/>
                    <button onClick={()=>this.setEditando(dados.id)}>Cancelar</button>
                    <button onClick={()=>this.editTask(dados.id)}>Enviar</button></>
                    }
                    {
                    dados.editando || <><button onClick={()=>this.setEditando(dados.id)}>Editar</button>                    
                    <button onClick={()=>this.selectTarefa(dados.id)}>Tarefa não concluida</button>
                    <button onClick={()=>this.removeTarefa(dados.id)}>Remover Tarefa</button></>
                    }
                  </Cursozin>
                );
              })}
          </ContainerPendentes>
          <button onClick={this.clearAll}>Apagar Tudo</button>          
        </ContainerInputs>
      </Container>
    );
  }
}