import styled from "styled-components";

export const LoginDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
height: fit-content;
border: 1px solid #fff;
padding: 8px;
border-radius: 8px;
`

export const Container = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
`

export const LoginForm = styled.form `
display: flex;
flex-direction: column;
width: 100%;
>input {
    width: 100%;
}
`