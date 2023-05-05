import React from "react";
import { NavLink } from "react-router-dom";

const Apartment = (props) => {
  return (
    // Le composant comprend un NavLink pour permettre à l'utilisateur de cliquer sur le lien qui mènera sur la fiche du logement en question.
    <NavLink to={`/logement/${props.item.id}`} className="apartments">
      <div className="cards">
        <img src={props.item.cover} alt="" />
        <h2>{props.item.title}</h2>
      </div>
    </NavLink>
  );
};

export default Apartment;

// Ce code est un fichier de composant React qui définit un composant appelé "Apartment".
// Voici une explication détaillée de chaque partie :

// 1. `import React from 'react';` : Cette ligne importe la bibliothèque React,
// qui est nécessaire pour créer des composants React.

// 2. `import { NavLink } from 'react-router-dom';` : Cette ligne importe le composant NavLink
// de la bibliothèque "react-router-dom". NavLink est un composant qui permet de créer
// des liens de navigation dans une application React.

// 3. `const Apartment = (props) => { ... };` : Cette ligne crée un composant fonctionnel
//React appelé "Apartment". Le composant accepte un objet "props" en tant que paramètre.
// Les props sont des données passées au composant depuis un composant parent.

// 4. À l'intérieur du composant Apartment, il y a une structure JSX qui définit la disposition
// du composant. La structure JSX ressemble à du HTML, mais elle est en réalité du JavaScript.

//    - `<NavLink to={`/logement/${props.item.id}` } className='apartments'>` :
// Ce composant NavLink crée un lien de navigation vers la page de détails d'un logement.
// L'attribut "to" est utilisé pour définir l'URL de destination, qui est une chaîne de caractères
// contenant le chemin "logement" suivi de l'ID du logement. L'attribut "className" est utilisé
// pour attribuer une classe CSS au lien.

//    - `<div className='cards'>` : Ce div est un conteneur pour les éléments suivants.
// Il a une classe CSS "cards" qui lui est attribuée.

//    - `<img src={props.item.cover} alt=""/>` : Cette balise img affiche l'image de couverture
// du logement. L'attribut "src" est défini avec la valeur de "props.item.cover",
// qui est l'URL de l'image.

//    - `<h2>{props.item.title}</h2>` : Cette balise h2 affiche le titre du logement.
// La valeur du titre est extraite des props avec "props.item.title".

//    - `</NavLink>` : Cette balise ferme le composant NavLink.

// 5. `export default Apartment;` : Cette ligne exporte le composant Apartment pour
// qu'il puisse être utilisé dans d'autres fichiers de l'application.
