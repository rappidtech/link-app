import React from 'react';
import styled from 'styled-components';
import styles from '../edits/styles.json';

const { subtitulo, general } = styles;
const colorTexto = subtitulo.colorTexto;
const fontSize = subtitulo.fontSize;
const textTransform = subtitulo.textTransform;
const fontWeigth = subtitulo.fontWeigth;

const SubtituloContainer = styled.div`
    color: ${colorTexto};
    font-size: ${fontSize};
    text-transform: ${textTransform};
`

const P = styled.p`
    font-weight: ${fontWeigth};
`

function Subtitulo({ text }) {
    const lineas = text.split('\n').map((linea, index, array) => (
        <React.Fragment key={index}>
          {linea}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ));

    return (
        <SubtituloContainer>
            <P>{lineas}</P>
        </SubtituloContainer>
    );
}

export default Subtitulo;