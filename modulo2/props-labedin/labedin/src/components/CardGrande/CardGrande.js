import React from 'react';
import styled from 'styled-components'

const BigCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImgPfp = styled.img `
    width: 70px;
    margin-right: 10px;
`
const BigH4 = styled.h4 `
    margin-bottom: 15px;
`

const DivInside = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCard>
            <ImgPfp src={ props.imagem } />
            <DivInside>
                <BigH4>{ props.nome }</BigH4>
                <p>{ props.descricao }</p>
            </DivInside>
        </BigCard>
    )
}
export default CardGrande;