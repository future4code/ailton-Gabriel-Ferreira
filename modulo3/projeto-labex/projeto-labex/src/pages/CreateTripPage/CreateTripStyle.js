import styled from "styled-components";

export const Centralizer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>form {
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,0.5);
    width: 300px;
    padding: 1%;
    border-radius: 12px;
    border: 1px solid #fff;
}
`