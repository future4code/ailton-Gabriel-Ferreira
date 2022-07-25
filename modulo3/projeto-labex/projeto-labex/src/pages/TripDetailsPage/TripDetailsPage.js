import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import HeaderComp from "../Header/HeaderComp";
import { PageBg } from "../ListTripPage/ListTripStyle";
import { useGetDetails } from "../../hooks/useGetDetails";
import { baseUrl } from "../../constants/Urls";
import {
  CandidateDetails,
  Centralizer,
  DeleteButton,
  DeletingDiv,
  MoreDetailCard,
  PlanetDetails,
} from "./TripDetailsPageStyle";
import { BackButton, LoadingContainer, LoadingGif } from "../../styles/GlobalStyle";
import { goToPage } from "../../routes/coordinator";

const TripDetailsPage = () => {
  const [deleting, setDelete] = useState(false);
  const navigate = useNavigate();
  const pathParams = useParams();
  const token = window.localStorage.getItem("token");
  const trip = useGetDetails(`${baseUrl}/trip/${pathParams.id}`, token);
  const deleteTrip = (url, token) => {
    axios
      .delete(url, {
        headers: { ContentType: "application/json", auth: token },
      })
      .then((res) => {
        goToPage(navigate, "/adminPanel");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const isDeleting = () => {
    setDelete(!deleting);
  };

  return (
    <PageBg>
      <HeaderComp />
      <Centralizer>
      <h1>Detalhes</h1>
        {trip !== undefined ? (
          <MoreDetailCard>
            <h3>Detalhes da viagem</h3>
            <PlanetDetails>
              <p>{`Nome: ${trip.name}`}</p>
              <p>{`Descrição: ${trip.description}`}</p>
              <p>{`Planeta: ${trip.planet}`}</p>
              <p>{`Data: ${trip.date}`}</p>
              <p>{`Duração (em dias): ${trip.durationInDays}`}</p>
            </PlanetDetails>
            <h3>Candidatos</h3>
            <div>
              {trip.candidates.map((data) => {
                const { age, applicationText, country, id, name, profession } =
                  data;
                return (
                  <CandidateDetails key={id}>
                    <p>{`Idade: ${age}`}</p>
                    <p>{`Nome: ${name}`}</p>
                    <p>{`Profissão: ${profession}`}</p>
                    <p>{`Pais: ${country}`}</p>
                    <p>{`Texto de aplicação: ${applicationText}`}</p>
                  </CandidateDetails>
                );
              })}
            </div>
            <DeletingDiv>
              {deleting === false ? (
                <DeleteButton onClick={isDeleting}>Apagar viagem</DeleteButton>
              ) : (
                <>
                  <p>Tem certeza que deseja apagar a viagem?</p>
                  <div>
                    <button
                      onClick={() =>
                        deleteTrip(`${baseUrl}/trips/${pathParams.id}`, token)
                      }
                    >
                      Apagar
                    </button>
                    <button onClick={isDeleting}>Cancelar</button>
                  </div>
                </>
              )}
            </DeletingDiv>
          </MoreDetailCard>
        ) : (
          <MoreDetailCard>
            <LoadingContainer>
              <LoadingGif
                src={
                  "https://cutewallpaper.org/21/loading-gif-transparent-background/2-Methods-to-Recover-an-Unsaved-PowerPoint-File.gif"
                }
              />
            </LoadingContainer>
          </MoreDetailCard>
        )}
        <BackButton onClick={()=>goToPage(navigate, "/adminPanel")}>Voltar</BackButton>
      </Centralizer>
    </PageBg>
  );
};

export default TripDetailsPage;
