import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconMap from '../iconMap'
import styled from 'styled-components';
import styles from '../edits/styles.json';

const { enlaces, general } = styles;

const colorFondo = enlaces.colorFondo;
const colorTexto = enlaces.colorTexto;
const colorHover = enlaces.colorHover;
const borderRadius = enlaces.borderRadius;
const colorIcon = enlaces.colorIcon;
const fontSize = enlaces.fontSize;
const fontWeigth = enlaces.fontWeigth;
const textTransform = enlaces.textTransform;
const scaleLink = enlaces.scaleLink;

const EnlacesListItem = styled.li
`
	display: flex;
	align-items: center;
	width: 100%;
`;

const Enlace = styled.a`
	flex-grow: 1;
	width: 25vw;
	padding: 15px 20px;
	margin: 8px 0;
	background-color: ${colorFondo};
	color: ${colorTexto};
	font-weight: ${fontWeigth};
	text-align: center;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: ${borderRadius};
	text-transform: ${textTransform};
	transform: scale(1);
  	transition: transform 0.3s ease;

	&:hover {
		background-color: ${colorHover};
		transform: ${scaleLink};	
	}

	@media (max-width: 768px) {
		width: 60vw;
	}
`;

const Icono = styled(FontAwesomeIcon)`
	margin-right: 10px;
	// flex-shrink: 0;
	color: ${colorIcon};
	font-size: ${fontSize};

	&.icon-delete {
		color: rgba(255, 0, 0, 0);
	}
`;

function generateLi(links) {
    return (
      <>
        {links.filter(link => link.render === 'si').map((link, index) => (
          <EnlacesListItem key={index}>
            <Enlace href={link.url}>
              <Icono className='icon-link' icon={iconMap[link.icon]} />
              {link.nombre}
              <Icono className='icon-delete' icon={iconMap[link.icon]} />
            </Enlace>
          </EnlacesListItem>
        ))}
      </>
    );
  }
  
  function Enlaces({ links }) {
    return (
      <ListGroup>
        {generateLi(links)}
      </ListGroup>
    );
  }

export default Enlaces;
