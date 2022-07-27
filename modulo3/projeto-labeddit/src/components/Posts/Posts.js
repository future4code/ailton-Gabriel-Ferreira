import React from "react";
import { Card, ContainerPosts } from "./PostStyle";

export const Posts = ({ dados }) => {
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
  } = dados;
  return (
    <ContainerPosts>
      {dados.map(({ username, body, id, voteSum, commentCount }) => {
        return (
          <Card key={id}>
            {console.log(dados)}
            <span>{`Enviado por ${username}`}</span>
            <p>{`${body}`}</p>
            <span>{voteSum} </span>
            <div>
              <button>Placeholder</button>
              <span>{commentCount}</span>
            </div>
          </Card>
        );
      })}
    </ContainerPosts>
  );
};
