import React from 'react';
import './Logo.css';

function Logo({ src, link }) {
    return (
        <div className='logo-container'>
            <a href={link}><img src={src} alt="Logo" /></a>
        </div>
    );
}

export default Logo;
