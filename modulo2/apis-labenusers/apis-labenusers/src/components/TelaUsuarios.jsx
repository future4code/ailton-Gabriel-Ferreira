import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';

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
  gap: 24px;
`;

export default class TelaUsuarios extends Component {
    state = {
        allUsers: []
    }
    componentDidMount(){
        this.getAllUsers()
    }
    componentDidUpdate(){
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

  render() {
    return (
      <MidContainer>
        <h2>Lista de usuarios</h2>
        <ul>
            {this.state.allUsers.map(data=>{
                return (
                <>
                <li key={data.id}>{data.name}</li>
                <button onClick={()=>this.props.deleteUser(data.id)}>Deletar user</button>
                </>
                )
            })}
        </ul>
        <button onClick={this.props.screenZero}>Voltar para a tela inicial</button>        
      </MidContainer>
    )
  }
}
