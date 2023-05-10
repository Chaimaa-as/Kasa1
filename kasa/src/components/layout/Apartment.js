// 1. Cette ligne importe la bibliothèque React, qui est nécessaire pour créer des composants React.
import React from "react";

// 2. Cette ligne importe le composant NavLink de la bibliothèque "react-router-dom".
// NavLink est un composant qui permet de créer des liens de navigation dans une application React.
import { NavLink } from "react-router-dom";

// 3. Le composant fonctonnel accepte un objet "props" en tant que paramètre.
// Les props sont des données passées au composant depuis un composant parent.
const Apartment = (props) => {
  // Le composant comprend un NavLink pour permettre à l'utilisateur de cliquer sur le lien qui mènera sur la fiche du logement en question.
  // 4. À l'intérieur du composant Apartment, il y a une structure JSX qui définit la disposition
  // du composant. La structure JSX ressemble à du HTML, mais elle est en réalité du JavaScript. */}

  return (
    // L'attribut "to" est utilisé pour définir l'URL de destination, qui est une chaîne de caractères contenant le chemin "logement" suivi de l'ID du logement.
    <NavLink to={`/logement/${props.item.id}`} className="apartments">
      <div className="cards">
        {/* Cette balise img affiche l'image de couverture du logement. L'attribut "src" est défini avec la valeur de "props.item.cover", qui est l'URL de l'image. */}
        <img src={props.item.cover} alt="" />

        {/* Cette balise h2 affiche le titre du logement dont la valeur du titre est extraite des props avec "props.item.title". */}
        <h2>{props.item.title}</h2>
      </div>
    </NavLink>
  );
};

// Cette ligne exporte le composant Apartment pour qu'il puisse être utilisé dans d'autres fichiers de l'application.
export default Apartment;
