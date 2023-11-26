import React from 'react';
import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import styles from '../edits/styles.json';
import data from '../edits/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import iconMap from '../iconMap'
import AccordionContent from './AccordionContent.js';

const enlaces = styles.enlaces;
const enlacesAcordeon = data.enlaces;
const colorFondo = enlaces.colorFondo;
const colorTexto = enlaces.colorTexto;
const colorHover = enlaces.colorHover;
const colorIcon = enlaces.colorIcon;
const fontSize = enlaces.fontSize;
const fontWeigth = enlaces.fontWeigth;
const colorActive = enlaces.colorActive;
const widthMD = enlaces.widthMD;
const widthSM = enlaces.widthSM;
const justifyContent = enlaces.justifyContent;

const StyledAccordion = styled.div`

	.accordion-item,
	.accordion-button {
		background-color: ${colorFondo};
		border: none;
		color: ${colorTexto};
		font-weight: ${fontWeigth};
		width: ${widthMD};
		box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
		justifyContent: ${justifyContent};
	
		&:hover {
			background-color: ${colorHover};
		}

		&:active,
		&:focus {
			background-color: ${colorActive};
			box-shadow: none
		}

		.accordion-item{
			box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
		}

		@media (max-width: 768px) {
			width: ${widthSM};
		}
	}

	.accordion-button {
		padding: 12px 20px;
		margin: 7px 0;
	}

	button.accordion-button.collapsed::after {
		background-image: url(./img/svg/arrow-down.svg);
	}

	button.accordion-button::after {
		background-image: url(./img/svg/arrow-down.svg);
	}
`;


function AccordionButton(links) {
	
	const [activeKey, setActiveKey] = useState(null);
	const accordionFilter = links.links.filter(link => link.render === 'si' && link.accordion === 'si')
	
	const handleToggle = (eventKey) => {
        // Si el acordeón que se está intentando abrir ya está abierto, lo cierra
        setActiveKey(activeKey === eventKey ? null : eventKey);
    };

	return ( 
		<>
			{accordionFilter.map((accordionlink, accordionindex) => (
				<StyledAccordion key={accordionindex}>
					<Accordion defaultActiveKey="Accordion" activeKey={activeKey} onSelect={handleToggle}>
							<Accordion.Item eventKey={String(accordionindex)}>
								<Accordion.Header>
									<img className='icon-link' src={accordionlink.iconImg} alt={accordionlink.nombre} style={{ marginRight: '10px' }} />
									{accordionlink.nombre}
								</Accordion.Header>
								<Accordion.Body >
									<AccordionContent item={data.carrusel[accordionindex]}/>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
				</StyledAccordion>
			))}
		</>
	);
}

export default AccordionButton;