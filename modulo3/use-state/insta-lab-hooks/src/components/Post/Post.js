import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  CommentContainer,
} from "./styles";

import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import styled from "styled-components";

const Post = (props) => {
  const [curtido, setCurtido] = useState(false);
  let [numeroCurtidas, setNumeroCurtidas] = useState(0);

  const onClickCurtida = () => {
    setCurtido(!curtido)
    contadorCurtidas()
  };

  const contadorCurtidas = () => {
    setNumeroCurtidas(numeroCurtidas += 1)
  }

  const [commenting, setCommenting] = useState (false);
  let [comment, setComment] = useState ('')
  let [arrayComment, setArrayComment] = useState ([])

  const onClickComment = () => {
    setCommenting(!commenting)
  };

  const onChangeComment = (e) => {
    console.log(e.target.value)
    setComment(comment = e.target.value)
  }

  const sendComment = () => {
    let copyArr = [...arrayComment, comment]
    setArrayComment(arrayComment = copyArr)    
  };

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>
      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />
      <PostFooter>
        <IconeComContador
          iconeBranco={iconeCoracaoBranco}
          iconePreto={iconeCoracaoPreto}
          onClickIcone={onClickCurtida}
          valorCurtido={curtido}
          valorContador={numeroCurtidas}
        />
        <button onClick={onClickComment}>Comentar</button>
      </PostFooter>
        {commenting &&
         <div>
          <input placeholder="Comentario" value={comment} onChange={onChangeComment}/>
          <button onClick={sendComment}>Enviar</button>
          <div>{arrayComment.map(data=>{
            return (
              <li key={data}>{data}</li>
            )
          })}</div>
          </div>}
      {/* {caixaDeComentario} */}
    </PostContainer>
  );
};

export default Post;
