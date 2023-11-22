import React from 'react';
import iconMap from '../../iconMap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Redes.css';

function Redes({ redes }) {
    console.log(redes);
    return (
        <div className='redes-container'>
        <ul className='ul-social'>
                {redes.filter(red => red.render === "si").map((red, index) => 
                    {
                        return (
                            <li className='li-social' key={index}>
                                <a className='a-social' href={red.url}>
                                    <FontAwesomeIcon className='icon-social' icon={iconMap[red.icon]} />
                                </a>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    );
}

export default Redes;