import React from 'react';
import { NavLink } from 'react-router-dom';


// Le composant a en argument un objet props qui nous permet de recuperer les attribut qui ont été passé quand on 
// a utilisé le composant
const Apartment = (props) => {
    return (
        
        <NavLink to={`/logement/${props.item.id}` } className='apartments'>
            {/* on recupere dans l objet props la valeur de "cover" dans l'attribut "item"  
            pour afficher l'image */}

             <div className='cards'>
                <img src= {props.item.cover} alt=""/>
                <h2>{props.item.title}</h2>
                <div className="overlay"></div>
             </div>
            
        </NavLink>
    );
};

export default Apartment;