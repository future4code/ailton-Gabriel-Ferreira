import React, { useState, useEffect } from "react";
import { seeProfile, match } from "../functions/Functions";
import styled from "styled-components";
import { Container, Card, HeaderDiv } from "../styles/GlobalStyle";

const PhotoAndTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #fff;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  color: white;
`;

const InfosDiv = styled.div`
  transition: 0.2s ease;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  height: fit-content;
  width: 100%;
  padding: 8px 0px;
  > button {
    cursor: pointer;
    border-radius: 12px;
    border: none;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    width: 150px;
    transition: 0.2s ease;
    :hover {
      background-color: #bbb;
    }
  }
`;

const Perfil = (props) => {
    const [sawProfile, setSawProfile] = useState(false)
  const [profile, setProfile] = useState({});

  useEffect(() => {
    seeProfile(setProfile);
  }, [sawProfile]);

  return (
    <Container>
      {console.log(profile)}
      <Card>
        <HeaderDiv>
          <h1>Astromatch</h1>
          <p onClick={()=>props.chooseScreen("matches")}>Ver Matchs</p>
        </HeaderDiv>
        <PhotoAndTextDiv img={profile.photo}>
          <InfosDiv>
            <p>{`${profile.name}, ${profile.age}`}</p>
            <p>{profile.bio}</p>
          </InfosDiv>
        </PhotoAndTextDiv>
        <ButtonsDiv>
          <button onClick={() => match(profile.id, true, setSawProfile, sawProfile)}>Zamn 😍</button>
          <button onClick={() => match(profile.id, true, setSawProfile, sawProfile)}>Zad 😢</button>
        </ButtonsDiv>
      </Card>
    </Container>
  );
};

export default Perfil;
