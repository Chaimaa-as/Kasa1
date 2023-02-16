import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__tabs">
                <NavLink to="/" className={({ isActive }) => 
                      (isActive ? "navbar__tab--active" : "navbar__tab--not-active")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => 
                      (isActive ? "navbar__tab--active" : "navbar__tab--not-active")}>
                    <li>A propos</li>
                </NavLink>
            </ul>
            
        </nav>
    );
};

export default Navigation;