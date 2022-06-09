import React from 'react';
import styled from 'styled-components'

const SmallContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100%;
    width: 40vw;
`
const Iconezinho = styled.img`
    width: 50px;
    margin-right: 10px;
`

function CardPequeno(props) {
    return (
        <SmallContainer>
            <Iconezinho src={props.icone} />
            {props.tipo}: {props.texto}
        </SmallContainer>
    )
}

export default CardPequeno;