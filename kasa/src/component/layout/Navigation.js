import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div >
            <ul className="header__nav">
                <NavLink className="header__NavLink__home" to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink className="header__NavLink__about" to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default Navigation;