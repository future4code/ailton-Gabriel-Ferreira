import styled from "styled-components";

export const MoreDetailCard = styled.div `
width: 50%;
height: 50%;
border: 1px solid #fff;
border-radius: 12px;
padding: 8px;
background-color: rgba(0,0,0,0.8);
overflow: auto;
transition: 1s ease;
@media (max-width: 1080px) {
    width: 90%;
    height: 80%;
  }

`

export const Centralizer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const PlanetDetails = styled.div `
display: flex;
flex-direction: column;
border: 1px solid #fff;
border-radius: 8px;
padding: 4px;
`

export const CandidateDetails = styled.div `
display: flex;
flex-direction: column;
border: 1px solid #fff;
border-radius: 8px;
padding: 4px;
margin: 4px 0px;
`

export const DeletingDiv = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export const DeleteButton = styled.button`
color: #fff;
padding: 2px 4px;
border-radius: 8px;
background-color: red;
cursor: pointer;
transition: 0.5s ease;
:hover {
    background-color: #fff;
    color: red;
}
`