import styled from "styled-components";

export const Card = styled.div`
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid black;
width: 350px;
height: 350px;
padding: 4px;
flex: none;
>p {
    width: 100%;
}
`

export const Container = styled.section`
display: flex;
gap: 8px;
padding: 64px 12px 12px 12px;
overflow: auto;
::-webkit-scrollbar{
    display: none;
}
transition: 1s ease;
`