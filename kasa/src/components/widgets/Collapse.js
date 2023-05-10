// Il représente un panneau déroulant qui peut afficher du texte ou une liste d'éléments
// en fonction des propriétés passées.

// Import des modules nécessaires : React et l'hook "useState" du module 'react'.
import React, { useState } from "react";

// Déclaration du composant "Collapse" : composant fonctionnel qui accepte les propriétés (props) passées par le composant parent.
const Collapse = (props) => {
  // On utilise l'hook "useState" pour créer une variable d'état nommée "isVisible" et sa fonction de mise à jour "setIsVisible".
  const [isVisible, setIsVisible] = useState(false); // La valeur initiale de "isVisible" est "false".

  // Le composant retourne une structure JSX qui contient le panneau déroulant et son contenu.
  return (
    <div className="collapsePanel">
      <div className="collapsePanel__title">
        {props.title}
        {/* // Bouton pour afficher/masquer le contenu : Ce bouton permet de basculer l'affichage du contenu du panneau. */}
        {/* //  Si "isVisible" est vrai, il affiche une flèche vers le haut et si "isVisible" est faux, il affiche une flèche vers le bas. */}
        <button
          className={
            isVisible
              ? "collapsePanel__arrow--up active"
              : "collapsePanel__arrow--down active"
          }
          // Le gestionnaire d'événements "onClick" bascule la valeur de "isVisible" entre vrai et faux.
          onClick={() => setIsVisible(!isVisible)}
        ></button>
      </div>

      {/* Affichage du contenu : Cette partie du code vérifie si "isVisible" est vrai. 
      Si c'est le cas, il vérifie si "props.text" est une instance de "Array". 
          Si "props.text" est une instance de "Array", il crée une liste non ordonnée (ul) avec les éléments du tableau.
          Sinon, il affiche simplement le texte dans une div. 
      Si "isVisible" est faux, il n'affiche rien. */}
      {isVisible ? (
        props.text instanceof Array ? (
          <ul className="collapsePanel__equipment content">
            {props.text.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        ) : (
          <div className="collapsePanel__description content">{props.text}</div>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

// Le composant "Collapse" est exporté pour être utilisé dans d'autres parties de l'application.
export default Collapse;

// En résumé, ce composant "Collapse" est un panneau déroulant qui peut afficher
// du texte ou une liste d'éléments en fonction des propriétés passées.
// Il utilise l'hook "useState" pour gérer l'affichage du contenu.
