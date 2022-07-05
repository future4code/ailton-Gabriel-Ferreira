import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: fit-content;
border: 1px solid white;
margin: 4px 0px;
padding: 4px;
>img {
  width: 100%;
}
>p {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: white;
  color: #141414;
  white-space: nowrap;
  min-width: 140px;
  width: fit-content;
  border-radius: 12px;
}
`

const Pokerender = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const catchPokemon = (pokeName) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => {
          // guarda as infos do pokemon no estado
          console.log(response.data.name);
          setPokemon(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    catchPokemon(props.pokemonProps);
  }, [props.pokemonProps]);

  return (
    <>
      <GlobalStyle />
      <Container>
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        <p>{`Nome: ${pokemon.name?.toUpperCase()}`}</p>
        <p>{`Peso: ${pokemon.weight} Kg`}</p>
        {pokemon.types && <p>{`Tipo: ${pokemon.types[0].type.name?.toUpperCase()}`}</p>}
      </Container>
    </>
  );
};

export default Pokerender;
