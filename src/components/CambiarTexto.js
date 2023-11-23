import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const Enlace = styled.a`
    font-size: 1em;
    text-align: center;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    
    &:hover {
        cursor: pointer;
        background-color: #f4f4f4;
    }
`

function BotonCompartir({ url }) {
  const [textoBoton, setTextoBoton] = useState('Copiar');
  const space = " "
  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setTextoBoton('Copiado');
        setTimeout(() => setTextoBoton('Copiar'), 3000); // Cambia de nuevo a "Copiar" después de 3 segundos
      })
      .catch(err => {
        console.error("Error al copiar texto: ", err);
        // Manejo del error
      });
  };

return (
    <Enlace onClick={copiarAlPortapapeles}>
        <FontAwesomeIcon icon={faCopy} size="1x" />
        <div style={{ margin: "0 10px" }}>
            {url}
        </div>
        {textoBoton}
    </Enlace>
);
}

export default BotonCompartir;
