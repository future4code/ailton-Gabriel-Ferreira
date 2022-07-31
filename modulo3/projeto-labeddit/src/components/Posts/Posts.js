import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/coordinator";
import { useContext } from "react";
import { Context } from "../../global/Context";

export const Posts = (props) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const { contador, setContador } = props.contador;
  const [curtido, setCurtido] = useState(false);
  const [postCurtido, setPostCurtido] = useState([]);
  const {comentario, setComentario} = useContext(Context)
  const votar = (dir, id, votepar) => {
    const direction = {
      direction: dir,
    };
    axios
      .post(`${base_url}/posts/${id}/votes`, direction, {
        headers: { authorization: token },
      })
      .then((res) => {
        console.log(res);
        setContador(contador + 1);
        setCurtido(true);
        console.log("votei");
        if (!postCurtido.includes(id)) {
          setPostCurtido([...postCurtido, id]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const desvotar = (id) => {
    axios
      .delete(`${base_url}/posts/${id}/votes`, {
        headers: { authorization: token },
      })
      .then((res) => {
        setContador(contador + 1);
        console.log("desvotei");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const pegarComentarios = (id) => {
    axios
      .get(`${base_url}/posts/${id}/comments`, {
        headers: { authorization: token },
      })
      .then((res) => {
        goToPost(navigate)
        setComentario(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ContainerPosts>
      {props.dados.map(
        ({ username, title, id, voteSum, commentCount, body, userVote }) => {
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
                  {userVote === 1 ? (
                    <Icone
                      src={SetaCima}
                      alt="Seta cima"
                      ajuste={"0px"}
                      onClick={() => desvotar(id)}
                      color={"#141414"}
                    />
                  ) : (
                    <Icone
                      src={SetaCima}
                      alt="Seta cima"
                      ajuste={"0px"}
                      onClick={() => votar(1, id, voteSum)}
                    />
                  )}
                  {voteSum === null ? (
                    <Count>0</Count>
                  ) : (
                    <Count>{voteSum}</Count>
                  )}
                  {userVote === -1 ? (
                    <Icone
                      src={SetaBaixo}
                      alt="Seta Baixo"
                      ajuste={"2px"}
                      onClick={() => desvotar(id)}
                      color={"#141414"}
                    />
                  ) : (
                    <Icone
                      src={SetaBaixo}
                      alt="Seta Baixo"
                      ajuste={"2px"}
                      onClick={() => votar(-1, id, voteSum)}
                    />
                  )}
                </ContainerIcones>
                <ContainerIcones>
                  <Icone
                    src={BalaoComentario}
                    alt="Balao comentario"
                    ajuste={"2px"}
                    onClick={() => pegarComentarios(id)}
                  />
                  {commentCount === null ? (
                    <Count>0</Count>
                  ) : (
                    <Count>{commentCount}</Count>
                  )}
                </ContainerIcones>
              </ContainerNumeros>
            </Card>
          );
        }
      )}
    </ContainerPosts>
  );
};
