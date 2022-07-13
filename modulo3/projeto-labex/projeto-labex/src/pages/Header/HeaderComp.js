import React from "react";
import { Header, HeaderButton } from "../../styles/GlobalStyle";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const HeaderComp = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token")
  return (
    <Header>
      <div>
        <h1 onClick={()=>goToPage(navigate, '/')}>Labe-X</h1>
      </div>
      <div>
        <HeaderButton onClick={()=>goToPage(navigate, '/trips/list')}>Viagens</HeaderButton>
        <HeaderButton onClick={()=>goToPage(navigate, '/trips/application')}>Candidatar-se</HeaderButton>
      </div>
      <div>
        {token === null ? (
          <button onClick={()=>goToPage(navigate, '/login')}>Login</button>
        ) : (
          <button onClick={()=>goToPage(navigate, '/adminPanel')}>Acessar area de Admin</button>
        )}
      </div>
    </Header>
  );
};

export default HeaderComp;