import React from "react";
import {
  Chamada,
  Container,
  ContainerBotao,
  ContainerCheckbox,
  ContainerTermoECheckbox,
  ContainerTermos,
  Texto,
} from "../styles/PaginaCadastroStyle";
import { Botao, BotaoNav, Formulario, Barra } from "../global/GlobalStyle";
import { goToFeed, goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { LabenuLogo } from "../components/LabenuLogo/LabenuLogo";
import { base_url } from "../constants/constants";
import { Input } from "../components/Input/Input";
import axios from "axios";
import useForm from "../hooks/useForm";

export const PaginaCadastro = () => {
  const navigate = useNavigate();
  const cadastrar = () => {
    axios
      .post(`${base_url}/users/signup`, form)
      .then((res) => {
        goToFeed(navigate);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert("Algo deu errado, tente novamente");
      });
  };
  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
  });
  return (
    <Container>
      <Barra>
        <div></div>
        <div>
          <LabenuLogo tamanho={"28px"} />
        </div>
        <div>
          <BotaoNav onClick={() => goToLogin(navigate)}>Entrar</BotaoNav>
        </div>
      </Barra>
      <Chamada>Olá, boas vindas ao LabEddit ;)</Chamada>
      <Formulario>
        <Input
          type={"text"}
          name="username"
          value={form.username}
          onChange={onChange}
          label={"Nome de usuario"}
        />
        <Input
          type={"text"}
          name="email"
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
        />
        <Input
          type={"password"}
          name="password"
          value={form.password}
          onChange={onChange}
          label={"Senha"}
        />
      </Formulario>
      <ContainerTermoECheckbox>
        <ContainerTermos>
          <Texto cor={"#000"} cursor={"auto"}>
            Ao continuar, você concorda com o nosso{" "}
          </Texto>
          <Texto cor={"#4088CB"} cursor={"pointer"}>
            Contrato de usuário{" "}
          </Texto>
          <Texto cor={"#000"} cursor={"auto"}>
            e nossa{" "}
          </Texto>
          <Texto cor={"#4088CB"} cursor={"pointer"}>
            Política de Privacidade
          </Texto>
        </ContainerTermos>
        <ContainerCheckbox>
          <input type={"checkbox"} />
          <span>
            Eu concordo em receber emails sobre coisas legais no Labeddit
          </span>
        </ContainerCheckbox>
      </ContainerTermoECheckbox>
      <ContainerBotao>
        <Botao
          borda={"none"}
          bordaRaio={"28px"}
          cor={"#fff"}
          gradiente={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
          onClick={cadastrar}
          tamanho={"85%"}
        >
          Cadastrar
        </Botao>
      </ContainerBotao>
    </Container>
  );
};
