import React, { useRef, useState, useEffect } from "react";
import { ArrowButton, Header, HeaderButton } from "../../styles/GlobalStyle";
import AstronautOk from "../../images/astronaut-ok.jpg";
import { MediumIconRoundBorder } from "../../styles/GlobalStyle";
import { Card, Container, LeftRightButtonDiv, PageBg } from "./ListTripStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";
import { useNavigate } from "react-router-dom";

const ListTripsPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goToListTripPage = () => {
    navigate("/trips/list");
  };

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
    <PageBg>
      <Header>
        <div>
          <h1 onClick={goToHomePage}>Labe-X</h1>
        </div>
        <div>
          <HeaderButton onClick={goToListTripPage}>Viagens</HeaderButton>
          <HeaderButton>Candidatar-se</HeaderButton>
        </div>
        <div>
          <button>Login</button>
        </div>
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
      <LeftRightButtonDiv>
        <ArrowButton onClick={handleLeftClick}>{`<`}</ArrowButton>
        <ArrowButton onClick={handleRightClick}>{`>`}</ArrowButton>
      </LeftRightButtonDiv>
    </PageBg>
  );
};

export default ListTripsPage;
