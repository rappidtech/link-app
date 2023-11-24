import React from 'react';
import styled from 'styled-components';
import styles from '../edits/styles.json';

const { titulo, general } = styles;
const colorTexto = titulo.colorTexto;
const fontSize = titulo.fontSize;
const textTransform = titulo.textTransform;

const TituloContainer = styled.div`
    color: ${colorTexto};
    font-size: ${fontSize};
    text-transform: ${textTransform};
`

const TituloText = styled.h1`
    margin: 0 0 0 0;};
`

function Titulo({ text }) {
    return (
        <TituloContainer>
            <TituloText>{text}</TituloText>
        </TituloContainer>
    );
}

export default Titulo;