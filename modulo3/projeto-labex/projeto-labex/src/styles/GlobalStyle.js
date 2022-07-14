import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    ::-webkit-scrollbar {
      background-color: #101010;
      width: 8px;
      /* display: none; */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #bbb;
      border-radius: 8px;
      /* display: none; */
    }
 }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: fixed;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  >div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 30%;
    /* background-color: yellow; */
    @media (max-width: 620px) {
    flex-direction: column;
  }
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ViewMoreButton = styled.button`
  background: none;
  font-size: 1rem;
  border-radius: 12px;
  transition: 0.5s ease;
  border: 1px solid white;
  color: white;
  width: 200px;
  height: 24px;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ButtonsMiniDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const MediumIconRoundBorder = styled.img`
  width: 124px;
  border-radius: 100%;
`;

export const HeaderButton = styled.button `
cursor: pointer;
border-radius: 6px;
color: #fff;
font-size: 1rem;
padding: 2px 4px;
white-space: nowrap;
width: fit-content;
height: fit-content;
background-color: transparent;
margin: 2px;
border: 1px solid #fff;
transition: 0.5s ease;
@media (max-width: 620px) {
    font-size: 0.7rem;
    width: 90%;
  }
:hover {
  background-color: #fff;
  color: #141414;
}
:active {
  background-color: #bbb;
  border: 1px solid #bbb;
  transition: 0.1s ease;
}
`

export const ArrowButton = styled.button`
cursor: pointer;
margin: 0px 12px;
width: fit-content;
height: fit-content;
font-size: 3rem;
font-weight: bolder;
color: #bbb;
border: none;
background: none;
transition: .5 ease;
:hover {
  color: #fff;
}
`

export const LogoTitle = styled.h1 `
white-space: nowrap;
font-size: 2rem;
user-select: none;
padding: 2px 8px;
cursor: pointer;
border-radius: 12px;
transition: 0.5s ease;
:hover {
  background-color: #fff;
  color: #000;
}
:active {
  background-color: #bbb;
  transition: 0.1s ease;
}
`

export const LoadingGif = styled.img `
width: 100px;
margin: 0 auto;
`

export const LoadingContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`