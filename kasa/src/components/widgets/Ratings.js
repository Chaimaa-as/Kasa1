// Ce code est un composant React qui affiche un système de notation sous forme d'étoiles.
// Voici une explication détaillée du code :

// 1. Importation des éléments nécessaires :
//    - `import React from 'react';` importe la bibliothèque React pour créer des composants.
//    - `import redStar from '../../assets/imgs/star_grey.png';` importe une image d'étoile grise.
//    - `import greyStar from '../../assets/imgs/star_red.png';` importe une image d'étoile rouge.
import React from "react";
import redStar from "../../assets/imgs/star_grey.png";
import greyStar from "../../assets/imgs/star_red.png";

// 2. Déclaration du composant `Ratings` :
//    - `const Ratings = ({rating}) => {` : Ceci déclare un composant fonctionnel React
// appelé `Ratings`. Il prend un objet de propriétés en argument, dont on extrait la propriété
// `rating`.
const Ratings = ({ rating }) => {
  return (
    <div className="hostRating">
      {/* création d'un array de 5 positions  */}
      {/* // 3. Le contenu du composant :
      //    - Un `div` avec la classe CSS `hostRating` est créé pour contenir les étoiles.
      //    - `[...Array(5)]` crée un nouveau tableau avec 5 éléments vides. Cela permet de créer
      // 5 étoiles. */}
      {/* on va appeler map en lui passant notre 1er argument ET une key*/}

      {/* //    - `.map((_, index) => {` : On utilise la méthode `map` pour parcourir chaque élément
      // du tableau et obtenir l'index de chaque élément. L'index représente la position de chaque
      // étoile (0 à 4). */}
      {[...Array(5)].map((_, index) => {
        //    - `const ratingValue = index + 1;` : On crée une variable `ratingValue` qui représente
        // la valeur de l'étoile (1 à 5).
        const ratingValue = index + 1;
        //    - `return (<img key={index} src={ratingValue > rating ? redStar : greyStar} alt=''/>);` :
        // On crée une balise `img` pour chaque étoile. La source de l'image (`src`) est déterminée
        // par une condition. Si la `ratingValue` est supérieure à la `rating`, on affiche l'étoile grise,
        // sinon on affiche l'étoile rouge.
        return (
          <img
            key={index}
            src={ratingValue > rating ? redStar : greyStar}
            alt=""
          />
        );
      })}
    </div>
  );
};

// On exporte le composant `Ratings` pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default Ratings;
