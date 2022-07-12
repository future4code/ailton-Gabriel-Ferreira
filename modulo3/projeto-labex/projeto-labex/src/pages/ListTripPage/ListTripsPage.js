import React, { useRef, useState, useEffect } from "react";
import { Header } from "../../styles/GlobalStyle";
import AstronautOk from "../../images/astronaut-ok.jpg";
import { MediumIconRoundBorder } from "../../styles/GlobalStyle";
import { Card, Container } from "./ListTripStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";

const ListTripsPage = () => {
  const trips = useRequestData(`${baseUrl}/trips`);

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      {console.log(trips)}
      <Header>
        <h1>Labe-X</h1>
        <button>Viagens</button>
        <button>Candidatar-se</button>
        <button>Login</button>
      </Header>
      <Container ref={carousel}>
        {trips?.map((data) => {
          const { id, name, planet, description } = data;
          return (
            <Card key={id}>
              <MediumIconRoundBorder src={AstronautOk} />
              <p>Nome: {name}</p>
              <p>Planeta: {planet}</p>
              <p>Descrição: {description}</p>
            </Card>
          );
        })}
      </Container>
      <button onClick={handleLeftClick}>Esquerda</button>
      <button onClick={handleRightClick}>Direita</button>
    </>
  );
};

export default ListTripsPage;
