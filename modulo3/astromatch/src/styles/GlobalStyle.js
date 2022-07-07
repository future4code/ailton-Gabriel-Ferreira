import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100vw;
height: 100vh;
background-color: #141414;
`