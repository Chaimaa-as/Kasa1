import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div >
            <ul className="header__nav">
                <NavLink className="nav__link active" to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink className="nav__link active" to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default Navigation;