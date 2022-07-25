import React from "react";
import HeaderComp from "../Header/HeaderComp";
import { PageBg } from "../ListTripPage/ListTripStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";
import { Centralizer, DetailCard, DetailContainer, NewTripDiv } from "./AdminHomePageStyle";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import {
  BackButton,
  LoadingContainer,
  LoadingGif,
} from "../../styles/GlobalStyle";

const AdminHomePage = () => {
  const trips = useRequestData(`${baseUrl}/trips`);
  const navigate = useNavigate();
  return (
    <PageBg>
      <HeaderComp />
      <Centralizer>
        <NewTripDiv>
          <h1>Viagens</h1>
          <BackButton onClick={()=> goToPage(navigate, `/adminPanel/createTrippage`)}>Criar nova viagem</BackButton>
        </NewTripDiv>
        <DetailContainer>
          {trips === undefined && (
            <LoadingContainer>
              <LoadingGif
                src={
                  "https://cutewallpaper.org/21/loading-gif-transparent-background/2-Methods-to-Recover-an-Unsaved-PowerPoint-File.gif"
                }
              />
            </LoadingContainer>
          )}
          {trips?.map((data) => {
            const { id, name, date, description, durationInDays, planet } =
              data;
            return (
              <DetailCard
                key={id}
                id={id}
                onClick={() => goToPage(navigate, `/adminPanel/details/${id}`)}
              >
                <p>{`Nome: ${name}`}</p>
                <p>{`Descrição: ${description}`}</p>
                <p>{`Planeta: ${planet}`}</p>
                <p>{`Data: ${date}`}</p>
                <p>{`Duração (em dias): ${durationInDays}`}</p>
              </DetailCard>
            );
          })}
        </DetailContainer>
        <BackButton onClick={() => goToPage(navigate, `/`)}>Voltar</BackButton>
      </Centralizer>
    </PageBg>
  );
};

export default AdminHomePage;
