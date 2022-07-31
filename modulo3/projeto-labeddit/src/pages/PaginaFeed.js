import React, { useEffect, useState } from "react";
import { LabenuLogo } from "../components/LabenuLogo/LabenuLogo";
import { Barra, Botao, BotaoNav } from "../global/GlobalStyle";
import {
  CaixaDeTexto,
  Container,
  ContainerInputs,
  InputELabel,
  Label,
  Linha,
} from "../styles/PaginaFeedStyle";
import { useRequestData } from "../hooks/useRequestData";
import { base_url } from "../constants/constants";
import { Posts } from "../components/Posts/Posts";
import useForm from "../hooks/useForm";
import axios from "axios";
import { goToHome } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const PaginaFeed = () => {
  const [contador, setContador] = useState(0);
  const dadosProps = { contador, setContador };
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { form, onChange, cleanFields } = useForm({
    title: "",
    body: "",
  });
  const { post, loading } = useRequestData(
    `${base_url}/posts`,
    token,
    contador
  );
  const criarPost = () => {
    axios
      .post(`${base_url}/posts`, form, { headers: { authorization: token } })
      .then((res) => {
        setContador(contador + 1);
        console.log(res);
        cleanFields()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fazerLogout = (nav) => {
    localStorage.clear();
    goToHome(nav);
  };

  return (
    <Container>
      <Barra>
        <div></div>
        <div>
          <LabenuLogo tamanho={"28px"} />
        </div>
        <div>
          <BotaoNav onClick={() => fazerLogout(navigate)}>Logout</BotaoNav>
        </div>
      </Barra>
      <ContainerInputs>
        <InputELabel>
          <CaixaDeTexto
            name="title"
            largura={"100%"}
            altura={"24px"}
            distanciamento={" 4px 15px"}
            overflow={"hidden"}
            bordaRaio={"6px"}
            onChange={onChange}
            value={form.title}
            required
          />
          <Label distanciamento={" 2px 15px"}>Titulo</Label>
        </InputELabel>
        <InputELabel>
          <CaixaDeTexto
            name="body"
            largura={"100%"}
            altura={"132px"}
            distanciamento={" 18px 15px"}
            overflow={"auto"}
            bordaRaio={"12px"}
            onChange={onChange}
            value={form.body}
            required
          />
          <Label distanciamento={" 15px 15px"}>Escreva seu texto...</Label>
        </InputELabel>
        <Botao
          borda={"none"}
          bordaRaio={"12px"}
          cor={"#fff"}
          gradiente={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
          tamanho={"85%"}
          onClick={criarPost}
        >
          Postar
        </Botao>
        <Linha />
      </ContainerInputs>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Posts dados={post} contador={dadosProps} />
      )}
    </Container>
  );
};
