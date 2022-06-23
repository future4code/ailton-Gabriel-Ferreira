import React, { Component } from 'react'
import styled from 'styled-components'
const Container = styled.div`
width: 100vw;
height: 10vh;
border-top: 1px solid #3f3f3f;
position: fixed;
background-color: #181818;
bottom: 0;
`

export default class MusicPlayer extends Component {
  render() {
    return (
      <Container>MusicPlayer</Container>
    )
  }
}
