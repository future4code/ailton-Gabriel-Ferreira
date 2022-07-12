import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: darkgray;
`

export const Header = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
position: fixed;
color: white;
background-color: rgba(0,0,0,0.8);
`

export const Main = styled.main`
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
background-image: url(${'https://images7.alphacoders.com/805/805197.jpg'});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
color: #fff;
>div{
    text-align: center;
    font-size: 1.5rem;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media(max-width: 820px) {
    width: 95%;
    }
}
`

export const Explanation = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 50vh;
background-color: #141414;
color: #fff;
font-size: 1.5rem;
`

export const ExplanationInternDiv = styled.div`
display: flex;
gap: 24px;
padding: 8px;
flex-direction: ${props => (props.direction ? `row` : `row-reverse`)};
align-items: center;
width: 60%;
@media(max-width: 820px) {
    width: 95%;
  }
`

export const MediumIconRoundBorder = styled.img`
width: 124px;
border-radius: 100%;
`

export const ViewMoreButton = styled.button`
background: none;
font-size: 1rem;
border-radius: 12px;
transition: 0.5s ease;
border: 1px solid white;
color: white;
width: 240px;
height: 24px;
cursor: pointer;
:hover {
    background-color: white;
    color: black;
}
`

export const ButtonsMiniDiv = styled.div`
display: flex;
justify-content: center;
gap: 12px;
`