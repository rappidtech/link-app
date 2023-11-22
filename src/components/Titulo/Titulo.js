import React from 'react';
import './Titulo.css';

function Titulo({ text }) {
    return (
        <div className='titulo-container'>
            <h1>{text}</h1>
        </div>
    );
}

export default Titulo;