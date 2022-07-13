import React from "react";
import HeaderComp from "../Header/HeaderComp";
import { PageBg } from "../ListTripPage/ListTripStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";
import { Centralizer, DetailCard, DetailContainer } from "./AdminHomePageStyle";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";

const AdminHomePage = () => {
  const trips = useRequestData(`${baseUrl}/trips`);
  const navigate = useNavigate()
  return (
    <PageBg>
      <HeaderComp />
      <Centralizer>
        <DetailContainer>
          {trips?.map((data) => {
            const { id, name, date, description, durationInDays, planet } =
              data;
            return (
              <DetailCard id={id} onClick={()=>goToPage(navigate, `/adminPanel/details/${id}`)}>
                <p>{`Nome: ${name}`}</p>
                <p>{`Descrição: ${description}`}</p>
                <p>{`Planeta: ${planet}`}</p>
                <p>{`Data: ${date}`}</p>
                <p>{`Duração (em dias): ${durationInDays}`}</p>
              </DetailCard>
            );
          })}
        </DetailContainer>
      </Centralizer>
    </PageBg>
  );
};

export default AdminHomePage;
