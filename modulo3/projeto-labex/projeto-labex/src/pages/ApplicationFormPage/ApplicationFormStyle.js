import styled from "styled-components";

export const ApplicationForm = styled.form `
display: flex;
flex-direction: column;
align-items: center;
gap: 4px;
width: 100%;
>input {
    width: 90%;
}
>select {
    width: 90%;
    text-align: center;
}
`

export const DescInput = styled.input `
width: 90%;
height: 120px;
`

export const Container = styled.div `
display: flex;
justify-content: center;
width: 20%;
min-width: 320px;
height: 50%;
padding: 12px;
background-color: rgba(0,0,0,0.8);
border: 1px solid #fff;
border-radius: 12px;
`

export const Centralizer = styled.div `
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`