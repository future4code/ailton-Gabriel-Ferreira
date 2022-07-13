import React, {useState, useEffect} from "react";
import { PageBg } from "../ListTripPage/ListTripStyle";
import { LoginDiv, Container } from "./LoginPageStyle";
import { Header, HeaderButton } from "../../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { baseUrl } from "../../constants/Urls";

const LoginPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const goToListTripPage = () => {
    navigate("/trips/list");
  };

  const goToLoginPage = () => {
    navigate("/login");
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const takeData = useLogin(`${baseUrl}/login`, email, password)

  return (
    <PageBg>
      <Header>
        <div>
          <h1 onClick={goToHomePage}>Labe-X</h1>
        </div>
        <div>
          <HeaderButton onClick={goToListTripPage}>Viagens</HeaderButton>
          <HeaderButton>Candidatar-se</HeaderButton>
        </div>
        <div>
          <button onClick={goToLoginPage}>Login</button>
        </div>
      </Header>
      <Container>
        <LoginDiv>
          <input placeholder="Email" value={email} onChange={handleEmail}></input>
          <input placeholder="Senha" value={password} onChange={handlePassword}></input>
          <button onClick={takeData}>Logar</button>
        </LoginDiv>
      </Container>
    </PageBg>
  );
};

export default LoginPage;
