import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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