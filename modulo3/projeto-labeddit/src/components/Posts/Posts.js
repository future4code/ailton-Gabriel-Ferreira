import React from "react";
import {
  Card,
  ContainerIcones,
  ContainerNumeros,
  ContainerPosts,
  Icone,
  Texto,
  Usuario,
  Count,
  Corpo,
} from "./PostStyle";
import SetaCima from "../../images/seta-cima.png";
import SetaBaixo from "../../images/seta-baixo.png";
import BalaoComentario from "../../images/balao-comentario.png";
import axios from "axios";
import { base_url } from "../../constants/constants";

export const Posts = (props) => {
  const token = localStorage.getItem("token");
  const {contador, setContador} = props.contador
  const {
    body,
    commentCount,
    createdAt,
    id,
    title,
    userId,
    userVote,
    username,
    voteSum,
  } = props.dados;
  const votar = (dir, id) => {
    const direction = {
      direction: dir,
    };
    axios
      .post(`${base_url}/posts/${id}/votes`, direction, {
        headers: { authorization: token },
      })
      .then((res) => {
        setContador(contador+1)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ContainerPosts>
      {props.dados.map(({ username, title, id, voteSum, commentCount, body }) => {
        return (
          <Card key={id}>
            <Usuario>{`Enviado por ${username}`}</Usuario>
            <Texto>{`${title}`}</Texto>
            {body.length > 60 ? (
              <Corpo>{body.slice(0, 60) + "..."}</Corpo>
            ) : (
              <Corpo>{body}</Corpo>
            )}
            <ContainerNumeros>
              <ContainerIcones>
                <Icone
                  src={SetaCima}
                  alt="Seta cima"
                  ajuste={"0px"}
                  onClick={() => votar(1,id)}
                />
                {voteSum === null ? <Count>0</Count> : <Count>{voteSum}</Count>}
                <Icone
                  src={SetaBaixo}
                  alt="Seta Baixo"
                  ajuste={"3px"}
                  onClick={() => votar(-1,id)}
                />
              </ContainerIcones>
              <ContainerIcones>
                <Icone
                  src={BalaoComentario}
                  alt="Balao comentario"
                  ajuste={"2px"}
                />
                <Count>{commentCount}</Count>
              </ContainerIcones>
            </ContainerNumeros>
          </Card>
        );
      })}
    </ContainerPosts>
  );
};
