import React, { useEffect, useState } from "react";
import { Container, Card, HeaderDiv } from "../styles/GlobalStyle";
import { getMatchesFunc } from "../functions/Functions";
import styled from "styled-components";

const MatchesDiv = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  ::-webkit-scrollbar {  
    background-color: #bbb ;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ff6600;
    border-radius: 12px;
  }
`;

const MiniProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 180px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  justify-content: flex-end;
  color: white;
  font-size: 1rem;
  font-weight: bolder;
  border-radius: 8px;
  transition: 1s ease;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  >p{
    background-color: rgba(0,0,0,0.5);
  }
`;

const Matches = (props) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    getMatchesFunc(setMatches);
  }, []);
  return (
    <Container>
      <Card>
      <HeaderDiv>
          <h1 onClick={()=>props.chooseScreen("home")}>Astromatch</h1>
          <p onClick={()=>props.chooseScreen("matches")}>Ver Matchs</p>
        </HeaderDiv>
        <MatchesDiv>
          {matches.map((data) => {
            console.log(matches);
            return <MiniProfileDiv img={data.photo}><p>{`${data.name}`}</p></MiniProfileDiv>;
          })}
        </MatchesDiv>
      </Card>
    </Container>
  );
};

export default Matches;
