import React, { useState, useEffect } from "react";
import { PageBg } from "../ListTripPage/ListTripStyle";
import HeaderComp from "../Header/HeaderComp";
import {
  ApplicationForm,
  Centralizer,
  Container,
  DescInput,
} from "./ApplicationFormStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Urls";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BackButton } from "../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [country, setCountry] = useState([]);
  const trips = useRequestData(`${baseUrl}/trips`);
  const { form, onChange } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
  });
  const selectedId = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };
  const applyToTrip = () => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    const url = `${baseUrl}/trips/${id}/apply`;
    console.log(body);
    axios
      .post(url, body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const prevent = (e) => {
    console.log("nao recarrego");
    e.preventDefault();
  };

  return (
    <>
      <PageBg>
        <HeaderComp />
        <Centralizer>
          <h2>Inscrever-se</h2>
          <Container>
            <ApplicationForm onSubmit={prevent}>
              <input
                placeholder="Nome"
                value={form.name}
                name={"name"}
                onChange={onChange}
              />
              <input
                placeholder="Idade"
                value={form.age}
                name={"age"}
                onChange={onChange}
              />
              <input
                placeholder="Profissao"
                value={form.profession}
                name={"profession"}
                onChange={onChange}
              />
              <input
                placeholder="Texto de aplicação"
                value={form.applicationText}
                name={"applicationText"}
                onChange={onChange}
              />
              <input
                placeholder="Pais"
                value={form.country}
                name={"country"}
                onChange={onChange}
              />
              {trips && (
                <select onChange={selectedId}>
                  <option>--- Escolha uma opção de viagem ---</option>
                  {trips.map((data) => {
                    return (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              )}
              <button onClick={applyToTrip}>Enviar</button>
            </ApplicationForm>
          </Container>
          <BackButton onClick={() => goToPage(navigate, "/")}>
            Voltar
          </BackButton>
        </Centralizer>
      </PageBg>
    </>
  );
};

export default ApplicationFormPage;
