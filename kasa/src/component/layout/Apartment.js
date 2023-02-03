import React from 'react';
import { NavLink } from 'react-router-dom';


// Le composant a en argument un objet props qui nous permet de recuperer les attribut qui ont été passé quand on 
// a utilisé le composant
const Apartment = (props) => {
    return (
        
        <NavLink to={`/logement/${props.item.id}` }>
{/* on recupere dans l objet props la valeur de "cover" dans l'attribut "item"  pour afficher l'image */}

             <div className='toto'>
                 <img src= {props.item.cover} alt=""/>
                <h1>{props.item.title}</h1>
             </div>
            
        </NavLink>
    );
};

export default Apartment;