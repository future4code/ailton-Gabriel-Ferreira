import styled from "styled-components";

export const DetailCard = styled.div `
display: flex;
flex-direction: column;
border: 1px solid #fff;
border-radius: 4px;
display: flex;
width: 100%;
height: fit-content;
transition: 0.25s ease;
cursor: pointer;
:hover {
    background-color: #bbb;
    color: #000;
}
`

export const DetailContainer = styled.section `
display: flex;
flex-direction: column;
gap: 8px;
width: 90%;
height: 80vh;
background-color: rgba(0,0,0,0.8);
border: 1px solid #fff;
border-radius: 12px;
padding: 8px;
overflow: auto;
`

export const Centralizer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`