import React from 'react';
import { NavLink } from 'react-router-dom';

const Apartment = (props) => {
    return (
        // Le composant comprend un NavLink pour permettre à l'utilisateur de cliquer sur le lien qui mènera sur la fiche du logement en question.
        // Sur cette fiche logement, récupérer l'identifiant mis en paramètre dans l'URL.
        // Grâce à celui-ci, il est possible de trouver le logement avec l'aide de la fonction "find".
        <NavLink to={`/logement/${props.item.id}` } className='apartments'>
             <div className='cards'>
                <img src= {props.item.cover} alt=""/>
                <h2>{props.item.title}</h2>
             </div>
        </NavLink>
    );
};

export default Apartment;