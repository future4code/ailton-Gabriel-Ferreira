import React, { useState, useEffect } from "react";
import { PageBg } from "../ListTripPage/ListTripStyle";
import { LoginDiv, Container } from "./LoginPageStyle";
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
          <form onSubmit={makeLogin}>
            <input
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            ></input>
            <input
              placeholder="Senha"
              type={"password"}
              value={password}
              onChange={handlePassword}
            ></input>
            <button>Fazer Login</button>
          </form>
        </LoginDiv>
      </Container>
    </PageBg>
  );
};

export default LoginPage;
