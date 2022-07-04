import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import MoreContent from "./MoreContent";

const MidContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 64px 0px;
  align-items: center;
  flex-direction: column;
  background-color: #0f0f0f;
  border: 1px solid #e36000;
  width: 20%;
  height: 60%;
  gap: 24px;
  border-radius: 12px;
`;

const DivAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  overflow: auto;
`;

const NamesContainer = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  align-items: center;
  flex-direction: column;
  padding: 4px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
  gap: 4px;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 0px 4px;
  border-radius: 4px;
  border: none;
  width: 100%;
  :hover {
    cursor: pointer;
    background-color: #300000;
  }
`;

const InfoButton = styled.button`
  background-color: aque;
  color: black;
  padding: 0px 4px;
  border-radius: 4px;
  border: none;
  width: 100%;
  :hover {
    cursor: pointer;
    background-color: #b0b0b0;
  }
`;

export default class TelaUsuarios extends Component {
  state = {
    allUsers: [],
    filterUsers: [],
    infos: {},
    showingMore: false,
    inputSearch: "",
  };

  componentDidMount() {
    this.getAllUsers();
  }
  
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
        this.setState({ allUsers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  searchUsers = (name) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}&email=`;
    axios
      .get(url, {
        headers: {
          Authorization: "gabriel-ferreira-ailton",
        },
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ filterUsers: response.data });
      })
  };

  deleteUser = (id, name) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    if (window.confirm(`Tem certeza que deseja apagar o usuario ${name}`))
      axios
        .delete(url, { headers: { Authorization: "gabriel-ferreira-ailton" } })
        .then((response) => {
          this.setState({
            allUsers: this.state.allUsers.filter((data) => {
              return data.id !== id;
            }),
          });
        })
        .catch((error) => {
          alert("Não foi possivel deletar o usuario, tente novamente");
        });
  };

  showUserInfos = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .get(url, { headers: { Authorization: "gabriel-ferreira-ailton" } })
      .then((response) => {
        this.setState({ infos: response.data });
        this.setState({ showingMore: true });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  hideInfoScreen = () => {
    this.setState({ showingMore: false });
  };

  onChangeInput = (e) => {
    this.setState({ inputSearch: e.target.value, filterUsers: [] });
    this.getAllUsers();
    // this.searchUsers(this.state.inputSearch);
  };
  onClickSearch = () => {
    this.searchUsers(this.state.inputSearch);
  };

  render() {
    return (
      <MidContainer>
        <h2>Lista de usuarios</h2>
        <div>
          <input
            placeholder="Buscar usuario"
            value={this.state.inputSearch}
            onChange={this.onChangeInput}
          />
          <button onClick={this.onClickSearch}>Buscar</button>
        </div>
        {this.state.inputSearch ? (          
          <DivAll>
            {this.state.filterUsers?.map((data) => {
              return (
                <NamesContainer key={data.id}>
                  {data.name}
                  <InfoButton onClick={() => this.showUserInfos(data.id)}>
                    Informações
                  </InfoButton>
                  <DeleteButton
                    onClick={() => this.deleteUser(data.id, data.name)}
                  >
                    Deletar Usuario
                  </DeleteButton>
                </NamesContainer>
              );
            })}
          </DivAll>
        ) : (
          <DivAll>
            {this.state.allUsers.map((data) => {
              return (
                <NamesContainer key={data.id}>
                  {data.name}
                  <InfoButton onClick={() => this.showUserInfos(data.id)}>
                    Informações
                  </InfoButton>
                  <DeleteButton
                    onClick={() => this.deleteUser(data.id, data.name)}
                  >
                    Deletar Usuario
                  </DeleteButton>
                </NamesContainer>
              );
            })}
          </DivAll>
        )}
        {this.state.showingMore && (
          <MoreContent
            infos={this.state.infos}
            showing={this.hideInfoScreen}
            details={this.getAllUsers}
          />
        )}
        <button onClick={this.props.screenZero}>
          Voltar para a tela inicial
        </button>
      </MidContainer>
    );
  }
}
