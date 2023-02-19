import React from 'react';
import logo from '../../assets/logo/logo.png';

const Logo = () => {
    return (
        <a href="/" className="header__logo">
            <img src={logo}  alt='logo'/>
        </a>
    );
};

export default Logo;