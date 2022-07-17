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
import { listCountries } from "../../constants/listCountries";

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
            <ApplicationForm onSubmit={applyToTrip}>
              <input
                placeholder="Nome"
                value={form.name}
                name={"name"}
                onChange={onChange}
                required
              />
              <input
                placeholder="Idade"
                value={form.age}
                name={"age"}
                onChange={onChange}
                required
              />
              <input
                placeholder="Profissao"
                value={form.profession}
                name={"profession"}
                onChange={onChange}
                required
              />
              <input
                placeholder="Texto de aplicação"
                value={form.applicationText}
                name={"applicationText"}
                onChange={onChange}
                required
              />
              <select
              value={form.country}
              defaultValue={"default"}
              name={"country"}
              onChange={onChange}
              required
              >
                <option value={'default'}>Escolha seu Pais</option>
                {listCountries.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              {console.log(trips)}
              {trips === undefined && (
                <select>
                  <option>Escolha uma opção de viagem</option>
                </select>
              )}
              {trips && (
                <select onChange={selectedId}>
                  <option>Escolha uma opção de viagem</option>
                  {trips.map((data) => {
                    return (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              )}
              <button>Enviar</button>
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
