import React from 'react';
import styled from 'styled-components';
import styles from '../edits/styles.json';

const { logo } = styles;

const logoSize = logo.logoSize;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 100%;
    margin: 10vh 0 5vh 0;
`

const LogoImg = styled.img`
    height: ${logoSize};
    width: ${logoSize};
    border-radius: 50%;
`


function Logo({ src, link }) {
    return (
        <LogoContainer>
            <a target='blank' href={link}><LogoImg src={src} alt="Logo" /></a>
        </LogoContainer>
    );
}

export default Logo;
