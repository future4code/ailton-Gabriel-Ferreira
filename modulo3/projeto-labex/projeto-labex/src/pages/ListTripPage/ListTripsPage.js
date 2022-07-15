import React, { useRef, useState, useEffect } from "react";
import {
  ArrowButton,
  LoadingContainer,
  LoadingGif,
} from "../../styles/GlobalStyle";
import AstronautOk from "../../images/astronaut-ok.jpg";
import { MediumIconRoundBorder } from "../../styles/GlobalStyle";
import { Card, Container, EmptyArrayMessageDiv, LeftRightButtonDiv, PageBg } from "./ListTripStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";
import HeaderComp from "../Header/HeaderComp";

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
    <PageBg>
      <HeaderComp />

      {trips !== undefined && trips !== [] && (
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
      )}
      {trips === undefined && (
        <Container>
          <Card>
            <LoadingContainer>
              <LoadingGif
                src={
                  "https://cutewallpaper.org/21/loading-gif-transparent-background/2-Methods-to-Recover-an-Unsaved-PowerPoint-File.gif"
                }
              />
            </LoadingContainer>
          </Card>
          <Card>
            <LoadingContainer>
              <LoadingGif
                src={
                  "https://cutewallpaper.org/21/loading-gif-transparent-background/2-Methods-to-Recover-an-Unsaved-PowerPoint-File.gif"
                }
              />
            </LoadingContainer>
          </Card>
          <Card>
            <LoadingContainer>
              <LoadingGif
                src={
                  "https://cutewallpaper.org/21/loading-gif-transparent-background/2-Methods-to-Recover-an-Unsaved-PowerPoint-File.gif"
                }
              />
            </LoadingContainer>
          </Card>
        </Container>
      )}
      <LeftRightButtonDiv>
        <ArrowButton onClick={handleLeftClick}>{`<`}</ArrowButton>
        <ArrowButton onClick={handleRightClick}>{`>`}</ArrowButton>
      </LeftRightButtonDiv>
    </PageBg>
  );
};

export default ListTripsPage;
