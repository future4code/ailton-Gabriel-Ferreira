import styled from "styled-components"

export const LogoDiv = styled.div`
display: grid;
width: ${props=> props.tamanho};
height: ${props=> props.tamanho};
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
`

export const LogoPedaco = styled.div`
background-color: ${props=> props.cor};
border-radius: ${props=> props.direcao};
`