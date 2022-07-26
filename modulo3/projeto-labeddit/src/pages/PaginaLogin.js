import React, { useState, useEffect } from "react";
import Logo from "../images/labenu-logo.png";
import { Botao, LogoImg, Texto, Titulo } from "../global/GlobalStyle";
import { goToCadastro, goToFeed } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerImagem,
  ContainerInputs,
  ContainerTextos,
} from "../styles/PaginaLoginStyle";
import { Input } from "../components/Input/Input";
import useForm from "../hooks/useForm";

export const PaginaLogin = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
  const login = (event) => {
    console.log("foi");
    event.preventDefault();
  };
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerImagem>
        <LogoImg src={Logo} alt="logo" />
      </ContainerImagem>
      <ContainerTextos>
        <Titulo tamanho={"2rem"}>LabEddit</Titulo>
        <Texto tamanho={"1rem"}>O projeto de rede social da Labenu</Texto>
      </ContainerTextos>
      <ContainerInputs>
        <form onSubmit={login}>
          <Input
            placeholder={"Login"}
            type={"texto"}
            name="email"
            value={form.email}
            onChange={onChange}
          />
          <Input
            placeholder={"Senha"}
            type={"password"}
            name="password"
            value={form.password}
            onChange={onChange}
          />
        </form>
      </ContainerInputs>
      <Botao
        borda={"none"}
        bordaRaio={"28px"}
        cor={"#fff"}
        gradiente={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
        onClick={() => goToFeed(navigate)}
      >
        Continuar
      </Botao>
      <Botao
        borda={"2px solid #F9B24E"}
        bordaRaio={"28px"}
        cor={"#F9B24E"}
        gradiente={"#fff"}
        onClick={() => goToCadastro(navigate)}
      >
        Crie uma conta
      </Botao>
    </Container>
  );
};
