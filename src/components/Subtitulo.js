import React from 'react';
import styled from 'styled-components';
import styles from '../edits/styles.json';

const { subtitulo, general } = styles;
const colorTexto = subtitulo.colorTexto;
const fontSize = subtitulo.fontSize;
const textTransform = subtitulo.textTransform;

const SubtituloContainer = styled.div`
    color: ${colorTexto};
    font-size: ${fontSize};
    text-transform: ${textTransform};
`

function Subtitulo({ text }) {
    return (
        <SubtituloContainer>
            <h4>{text}</h4>
        </SubtituloContainer>
    );
}

export default Subtitulo;