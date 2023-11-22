import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconMap from '../../iconMap'
import './Enlaces.css';

function generateLi(links) {
    return (
        <>
            {links.filter(link => link.render === 'si').map((link, index) => (
                <li className='enlaces-container' key={index}>
                    <a href={link.url}>
                        <FontAwesomeIcon className='icon-link' icon={iconMap[link.icon]} />
                        {link.nombre}
                        <FontAwesomeIcon className='icon-delete' icon={iconMap[link.icon]} />
                    </a>
                </li>
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
