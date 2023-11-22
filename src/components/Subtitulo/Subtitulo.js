import React from 'react';
import './Subtitulo.css';

function Subtitulo({ text }) {
    return (
        <div className='subtitulo-container'>
            <h4>{text}</h4>
        </div>
    );
}

export default Subtitulo;