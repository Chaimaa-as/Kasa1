import React, { useState } from "react";

const Collapse = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="collapsePanel">
      <div className="collapsePanel__title">
        {props.title}
        <button
          className={
            isVisible
              ? "collapsePanel__arrow--up active"
              : "collapsePanel__arrow--down active"
          }
          onClick={() => setIsVisible(!isVisible)}
        ></button>
      </div>

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

export default Collapse;
// Ce code est un composant React fonctionnel nommé "Collapse".
// Il représente un panneau déroulant qui peut afficher du texte ou une liste d'éléments
// en fonction des propriétés passées. Voici une explication détaillée de chaque partie du code :

// 1. Importation des modules nécessaires :
// ```javascript
// import React ,{ useState }from 'react';
// ```
// On importe React et l'hook "useState" du module 'react'.

// 2. Déclaration du composant "Collapse" :
// ```javascript
// const Collapse = (props) => {
// ```
// "Collapse" est un composant fonctionnel qui accepte les propriétés (props) passées
// par le composant parent.

// 3. Utilisation de l'hook useState :
// ```javascript
// const [isVisible,setIsVisible]=useState(false)
// ```
// On utilise l'hook "useState" pour créer une variable d'état nommée "isVisible"
// et sa fonction de mise à jour "setIsVisible". La valeur initiale de "isVisible" est "false".

// 4. Structure du composant :
// Le composant retourne une structure JSX qui contient le panneau déroulant et son contenu.

// 5. Bouton pour afficher/masquer le contenu :
// ```javascript
// <button
//     className={isVisible?
//         'collapsePanel__arrow--up active':'collapsePanel__arrow--down active'}
//         onClick={()=>setIsVisible(!isVisible)}>
// </button>
// ```
// Ce bouton permet de basculer l'affichage du contenu du panneau. Si "isVisible" est vrai,
// il affiche une flèche vers le haut et si "isVisible" est faux, il affiche une flèche vers le bas.
// Le gestionnaire d'événements "onClick" bascule la valeur de "isVisible" entre vrai et faux.

// 6. Affichage du contenu :
// ```javascript
// {
//     isVisible?
//         props.text instanceof Array?
//         <ul className='collapsePanel__equipment content' >
//             {
//                 props.text.map((text,index)=>(
//                     <li key={index}>{text}</li>
//                     ))
//                 }
//             </ul>
//         :
//         <div className='collapsePanel__description content'>{props.text}</div>
//     :
//     <></>
// }
// ```
// Cette partie du code vérifie si "isVisible" est vrai. Si c'est le cas,
// il vérifie si "props.text" est une instance de "Array". Si "props.text" est une instance
// de "Array", il crée une liste non ordonnée (ul) avec les éléments du tableau.
// Sinon, il affiche simplement le texte dans une div. Si "isVisible" est faux, il n'affiche rien.

// 7. Exportation du composant :
// ```javascript
// export default Collapse;
// ```
// Le composant "Collapse" est exporté pour être utilisé dans d'autres parties de l'application.

// En résumé, ce composant "Collapse" est un panneau déroulant qui peut afficher
// du texte ou une liste d'éléments en fonction des propriétés passées.
// Il utilise l'hook "useState" pour gérer l'affichage du contenu.
