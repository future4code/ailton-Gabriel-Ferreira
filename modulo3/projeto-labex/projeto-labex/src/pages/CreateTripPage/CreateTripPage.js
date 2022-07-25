import React, { useState, useEffect } from "react";
import HeaderComp from "../Header/HeaderComp";
import { PageBg } from "../ListTripPage/ListTripStyle";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { baseUrl } from "../../constants/Urls";
import { Centralizer } from "../CreateTripPage/CreateTripStyle";
import { BackButton } from "../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";

const CreateTripPage = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const url = `${baseUrl}/trips`;
  const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0,
  });

  const createTrip = (bodyParam) => {
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.planet,
      description: form.description,
      durationInDays: form.durationInDays,
    };
    console.log(body);
    axios
      .post(url, body, { headers: { auth: token } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const teste = (e) => {
    e.preventDefault();
  };
  return (
    <PageBg>
      <HeaderComp />
      <Centralizer>
        <h2>Criar nova viagem</h2>
        <form onSubmit={() => createTrip(form)}>
          <input
            placeholder="Nome"
            value={form.name}
            name={"name"}
            onChange={onChange}
            required
          />
          <input
            placeholder="Planeta"
            value={form.planet}
            name={"planet"}
            onChange={onChange}
            required
          />
          <input
            placeholder="Data"
            value={form.date}
            name={"date"}
            onChange={onChange}
            type={"date"}
            required
          />
          <input
            placeholder="Descrição"
            value={form.description}
            name={"description"}
            onChange={onChange}
            required
          />
          <input
            placeholder="Duração em dias"
            value={form.durationInDays}
            name={"durationInDays"}
            onChange={onChange}
            pattern={"^[0-9]*$"}
            title={"Insira apenas numeros"}
            required
          />
          <button>Enviar</button>
        </form>
        <BackButton onClick={()=>goToPage(navigate, `/adminPanel`)}>Voltar</BackButton>
      </Centralizer>
    </PageBg>
  );
};

export default CreateTripPage;
