import React from 'react';
import logo from '../../assets/logo/logo.png';

const Logo = () => {
    return (
        <a href="/" className="header__logo">
            <img src={logo}  alt="logo Kasa"/>
        </a>
    );
};

export default Logo;