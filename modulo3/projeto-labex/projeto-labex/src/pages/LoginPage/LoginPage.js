import React, { useState, useEffect } from "react";
import { PageBg } from "../ListTripPage/ListTripStyle";
import { LoginDiv, Container, LoginForm } from "./LoginPageStyle";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { baseUrl } from "../../constants/Urls";
import HeaderComp from "../Header/HeaderComp";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const takeData = useLogin(`${baseUrl}/login`, email, password);
  const makeLogin = (e) => {
    e.preventDefault()
    takeData()
  }

  return (
    <PageBg>
      <HeaderComp />
      <Container>
        <LoginDiv>
          <h3>Fazer Login</h3>
          <LoginForm onSubmit={makeLogin}>
            <input
              placeholder="Email"
              type={"email"}
              value={email}
              onChange={handleEmail}
              required
            ></input>
            <input
              placeholder="Senha"
              type={"password"}
              value={password}
              onChange={handlePassword}
              required
            ></input>
            <button>Fazer Login</button>
          </LoginForm>
        </LoginDiv>
      </Container>
    </PageBg>
  );
};

export default LoginPage;
