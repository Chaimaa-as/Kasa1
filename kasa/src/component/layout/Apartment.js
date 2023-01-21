import React from 'react';
import { NavLink } from 'react-router-dom';

const Apartment = ({item}) => {
    return (
        <NavLink to={`/logement/${item.id}` }>
            <h1>{item.title}</h1>
            <div>{item.location}</div>
            {/* IMAGE + TITRE ( AMETTRE DANS HOME) */}
        </NavLink>
    );
};

export default Apartment;