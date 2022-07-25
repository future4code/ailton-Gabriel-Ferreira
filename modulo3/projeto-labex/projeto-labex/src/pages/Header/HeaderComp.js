import React from "react";
import { Header, HeaderButton, LogoTitle } from "../../styles/GlobalStyle";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const HeaderComp = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token")
  const clearUser = () => {
    localStorage.clear()
    goToPage(navigate, '/')
  }
  return (
    <Header>
      <div>
        <LogoTitle onClick={()=>goToPage(navigate, '/')}>Labe-X</LogoTitle>
      </div>
      <div>
        <HeaderButton onClick={()=>goToPage(navigate, '/trips/list')}>Viagens</HeaderButton>
        <HeaderButton onClick={()=>goToPage(navigate, '/trips/application')}>Candidatar-se</HeaderButton>
      </div>
      <div>
        {token === null ? (
          <HeaderButton onClick={()=>goToPage(navigate, '/login')}>Login</HeaderButton>
        ) : (
          <>
          <HeaderButton onClick={()=>goToPage(navigate, '/adminPanel')}>Area de Admin</HeaderButton>
          <HeaderButton onClick={clearUser}>Deslogar</HeaderButton>
          </>
        )}
      </div>
    </Header>
  );
};

export default HeaderComp;