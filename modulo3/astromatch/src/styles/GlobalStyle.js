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

export const Card = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 320px;
  height: 780px;
  background-color: #fff;
  border-radius: 8px;
`;

export const HeaderDiv = styled.div `
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 12px;
`