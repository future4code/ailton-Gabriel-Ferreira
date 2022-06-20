import React from "react";
import styled from "styled-components";

const ContatoEstilizado = styled.section`
display: flex;
gap: 12px;
width: 100%;
height: 80px;
min-width: min-content;
padding: 12px;
align-items: center;
border-top: 1px solid black;
:hover{
    cursor: pointer;
    background-color: #f0f2f5;
}
img {
    border-radius: 50%;
    :hover{
        cursor: pointer;
    }
}
`

const Contato = (props) => {
  const novoContato = props.propContato.map((dado, index) => {
    return (<ContatoEstilizado key={index}>
        <img src={`https://picsum.photos/id/${dado.fotoContato}/50/50`}/>        
        <p>{dado.nomeContato}</p>
    </ContatoEstilizado >
    )
  });
  return (
    <>
      {novoContato}
    </>
  );
};

export default Contato;
