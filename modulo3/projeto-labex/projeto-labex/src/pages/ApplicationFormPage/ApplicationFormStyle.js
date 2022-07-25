import styled from "styled-components";

export const ApplicationForm = styled.form `
display: flex;
flex-direction: column;
align-items: center;
gap: 4px;
width: 100%;
>input {
    width: 90%;
    background: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 2px 1px;
    border-radius: 4px;
    ::placeholder {
        color: #fff;
    }
    :hover {
        background-color: #000;
    }
}
>select {
    width: 90%;
    background: rgba(0,0,0,0.9);
    color: #fff;
    border: 1px solid #fff;
    padding: 2px 1px;
    border-radius: 4px;
}
>button {
    width: 90%;
    background: none;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease;
    :hover {
        background-color: #fff;
        color: #000;
    }
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
height: fit-content;
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
flex-direction: column;
`