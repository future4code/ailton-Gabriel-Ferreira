import React from "react";
import { useParams } from "react-router-dom";
import HeaderComp from "../Header/HeaderComp";
import { PageBg } from "../ListTripPage/ListTripStyle";
import { useGetDetails } from "../../hooks/useGetDetails";
import { baseUrl } from "../../constants/Urls";
import { Centralizer, MoreDetailCard } from "./TripDetailsPageStyle";

const TripDetailsPage = () => {
  const pathParams = useParams();
  const token = window.localStorage.getItem("token");
  const trip = useGetDetails(`${baseUrl}/trip/${pathParams.id}`, token);
  return (
    <PageBg>
      <HeaderComp />
      <Centralizer>
        {trip && (
          <MoreDetailCard>
            <p>{`Nome: ${trip.name}`}</p>
            <p>{`Descrição: ${trip.description}`}</p>
            <p>{`Planeta: ${trip.planet}`}</p>
            <p>{`Data: ${trip.date}`}</p>
            <p>{`Duração (em dias): ${trip.durationInDays}`}</p>
          </MoreDetailCard>
        )}
      </Centralizer>
    </PageBg>
  );
};

export default TripDetailsPage;
