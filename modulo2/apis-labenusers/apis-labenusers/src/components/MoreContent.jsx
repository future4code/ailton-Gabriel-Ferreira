import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
background-color: white;
width: 60%;
height: 20%;
`

export default class MoreContent extends Component {
  render() {
    return (
      <Container>
        <p>{this.props.infos.name}</p>
        <p>{this.props.infos.email}</p>
        <button onClick={this.props.showing}>Esconder</button>
      </Container>
    )
  }
}