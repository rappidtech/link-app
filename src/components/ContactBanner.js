import React from 'react';
import styled from 'styled-components';

const A = styled.a`
    position: fixed;
    top: 100px;
    right: 10px;
    background-color: rgb(236, 221, 91);
    color: #333;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    z-index: 1000;
    text-decoration: none;
    animation: moveUpDown 1.8s ease-in-out infinite;
    
    @media (max-width: 768px) {
        .phone-line-break {
            display: block;
        }
    }
`


function ContactBanner() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    return (
        <A target='blank' href='https://rappidtech.com/links'>
            ¡PEDILO{isMobile && <br className="phone-line-break" />} GRATIS!
        </A>
    );
}

export default ContactBanner;
