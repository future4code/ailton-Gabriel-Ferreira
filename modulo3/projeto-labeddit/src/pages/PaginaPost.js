import React, { useContext } from "react";
import { Context } from "../global/Context";

export const PaginaPost = () => {
  const { comentario } = useContext(Context);
  console.log(comentario);
  return (
    <div>
      {comentario?.map((data) => {
        return <p>{data.body}</p>;
      })}
    </div>
  );
};
