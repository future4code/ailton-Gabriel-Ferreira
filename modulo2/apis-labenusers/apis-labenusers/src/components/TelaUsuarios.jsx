import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import MoreContent from './MoreContent';

const MidContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 64px 0px;
  align-items: center;
  flex-direction: column;
  background-color: deepskyblue;
  border: 1px solid black;
  width: 20%;
  height: 60%;
  gap: 24px;
  border-radius: 25px;
`;

const DivAll = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 4px;
`

const NamesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
`;

export default class TelaUsuarios extends Component {
    state = {
        allUsers: [],
        infos: {},
        showingMore: false
    }

    componentDidMount(){
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "gabriel-ferreira-ailton"
            }
        }).then((response) => {
            this.setState ({allUsers: response.data})
            }).catch((error)=>{
            console.log(error)
        })
      }

      deleteUser = (id, name) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        if (window.confirm(`Tem certeza que deseja apagar o usuario ${name}`))
        axios.delete(url ,{headers: {Authorization: "gabriel-ferreira-ailton"}
        }).then((response) => {            
            this.setState ({allUsers: this.state.allUsers.filter(data=>{
              return data.id !== id
            })})
        }).catch((error)=> {
            alert('Não foi possivel deletar o usuario, tente novamente')
        })
      };

      showUserInfos = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.get(url ,{headers: {Authorization: "gabriel-ferreira-ailton"}})
        .then((response)=>{
          this.setState({infos: response.data})
          this.setState({showingMore: true})
        }).catch((error)=>{
          alert(error.message)
        })
      }

      hideInfoScreen = () => {
        this.setState({showingMore: false})
      }

  render() {
    return (
      <MidContainer>
        <h2>Lista de usuarios</h2>
        <DivAll>
            {this.state.allUsers.map(data=>{
                return (
                <NamesContainer key={data.id}>{data.name}
                <button onClick={()=>this.deleteUser(data.id, data.name)}>Deletar Usuario</button>
                <button onClick={()=>this.showUserInfos(data.id)}>Informações</button>
                </NamesContainer>
                )
            })}
        </DivAll>
        {this.state.showingMore && <MoreContent infos={this.state.infos} showing={this.hideInfoScreen}/>}
        <button onClick={this.props.screenZero}>Voltar para a tela inicial</button>        
      </MidContainer>
    )
  }
}