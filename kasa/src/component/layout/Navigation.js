import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div >
            <ul className="nav">
                <NavLink className="nav__link" to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink className="nav__link" to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default Navigation;