import React, { Component } from 'react'
import styled from 'styled-components'

const MusicplayerContainer = styled.section`
border-top: 1px solid #3b3b3b;
`

export default class Player extends Component {
    render() {
        return (
          <MusicplayerContainer>SideBar</MusicplayerContainer>
        )
      }
}
