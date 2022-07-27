import React from "react";
import { LabenuLogo } from "../components/LabenuLogo/LabenuLogo";
import { Barra, BotaoNav } from "../global/GlobalStyle";
import { Container } from "../styles/PaginaFeedStyle";
import { useRequestData } from "../hooks/useRequestData";
import { base_url } from "../constants/constants";
import { Posts } from "../components/Posts/Posts";

export const PaginaFeed = () => {
  const token = localStorage.getItem("token");
  const posts = useRequestData(`${base_url}/posts`, token);

  return (
    <Container>
      <Barra>
        <div></div>
        <div>
          <LabenuLogo tamanho={"28px"} />
        </div>
        <div>
          <BotaoNav>Logout</BotaoNav>
        </div>
      </Barra>
      <div>
        <input />
        <button>Postar</button>
      </div>
      <Posts dados={posts} />
    </Container>
  );
};
