import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div >
            <ul className="header__nav">
                <NavLink to="/" className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>
                    <li>A propos</li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default Navigation;