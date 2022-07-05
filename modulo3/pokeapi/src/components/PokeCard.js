import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokerender from "./Pokerender";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
const Container = styled.div`
width: 20%;
height: 70%;
background-color: #141414;
border-radius: 12px;
color: #bbb;
display: flex;
flex-direction: column;
align-items: center;
padding: 8px;
`

const PokeCard = () => {
  const [pokelist, setPokelist] = useState([]);
  const [pokeName, setPokename] = useState("");

  useEffect(() => {
    const catchEmAll = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then((response) => {
          console.log(response.data.results);
          setPokelist(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    catchEmAll();
  }, []);

  const changePokeName = event => {
    setPokename( event.target.value );
  };

  return (
    <>
    <GlobalStyle/>
    <Container>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokelist.map((data) => {
          return (
            <option key={data.name} value={data.name}>
              {data.name.toUpperCase()}
            </option>
          );
        })}
      </select>
      {pokeName && <Pokerender pokemonProps={pokeName}/>}
    </Container>
    </>
  );
};

export default PokeCard;
