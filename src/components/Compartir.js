import React from "react";
import styled from 'styled-components';
import styles from '../edits/styles.json';


const Contenedor = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    margin: 5vh 35vw;
    max-width: 788px;
    

    @media (max-width: 768px) {
        margin: 5vh 15vw;
    }
    @media (max-width: 576px) {
        margin: 5vh 10vw;
    }

`;

const Boton = styled.button`
    padding: 0px;
    border-radius: 50%;
    border: none;
    background-color: white;
    width: 40px;
    height: 40px;
    color: #fff;

        &:hover {
            cursor: pointer;
        }
`;

const Img = styled.img`
    padding: 2px 3px 0 0 ;
`

function BotonCompartir({ onToggle  }) {
    return (
    <>
    <Contenedor>
        <Boton onClick={onToggle}>
            <Img src="./share-icon.svg" alt="Compartir" />
        </Boton>
    </Contenedor>
    </>
  );
}

export default BotonCompartir;
