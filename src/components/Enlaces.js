import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconMap from '../iconMap'
import styled from 'styled-components';
import styles from '../edits/styles.json';
import data from '../edits/data.json';

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
const margin = enlaces.margin;
const padding = enlaces.padding;
const border = enlaces.border;
const newColor = enlaces.newColor;
console.log('data', data)
if (newColor && newColor === 'si') {
	console.log('newColor', newColor)
	colorFondo = "#000000" 
}

const EnlacesListItem = styled.li
`
	display: flex;
	align-items: center;
	width: 100%;
`;

const Enlace = styled.a`
	flex-grow: 1;
	width: 25vw;
	padding: ${padding};
	margin: ${margin};
	background-color: ${colorFondo};
	color: ${colorTexto};
	font-weight: ${fontWeigth};
	text-align: center;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: ${borderRadius};
	border: ${border};	
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
	color: ${colorIcon};
	font-size: ${fontSize};
`;

function generateLi(links) {
    return (
      <>
        {links.filter(link => link.render === 'si').map((link, index) => (
			<EnlacesListItem key={index}>
				<Enlace target='blank' href={link.url} style={index === 0 && link.newColor === 'si' ? { backgroundColor: '#ecdd5b', color: "#000", borderColor:"#ecdd5b" } : null}>
					{link.iconImg ? (
					<img src={link.iconImg} alt={link.nombre} style={{ marginRight: '10px' }} />
					) : (
						<Icono className='icon-link' icon={iconMap[link.icon]} />
					)}
					{link.nombre}
					{link.iconImg ? (
					<img className='icon-delete' src={link.iconImg} alt={link.nombre} style={{ marginRight: '10px' }} />
					) : (
						<Icono style="" className='icon-delete' icon={iconMap[link.icon]} />
					)}
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
