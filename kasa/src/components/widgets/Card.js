// Importation de la bibliothèque React
import React from "react";

// Le composant Card est une fonction fléchée qui prend un objet `props` en paramètre.
const Card = (props) => {
  // Structure JSX du composant Card :
  return (
    // Les attributs de l'image et du titre sont définis en utilisant les propriétés de l'objet `props.apartmentData`
    <div>
      {/* Le code entre les accolades `{}` est une expression JavaScript qui est évaluée et affichée comme une valeur.  */}
      <img src={props.apartmentData.cover} />
      <h1>{props.apartmentData.title}</h1>
    </div>
  );
};

// Export du composant Card
export default Card;

// En résumé, ce code définit un composant "Card" réutilisable qui peut afficher une image
// et un titre d'un appartement en utilisant les données passées via les `props`.
