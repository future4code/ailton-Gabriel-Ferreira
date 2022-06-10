import React from "react";
import styled from "styled-components";

const Comentario = styled.div`
border: 1px solid black;
width: fit-content;
margin-left: 12px;
margin-bottom: 4px;
`

export default class ComentarioRender extends React.Component {
    render() {
        return (
            <>
            <Comentario>
                <p>{this.props.conteudo}</p>
            </Comentario>
            </>
        )
    }
}