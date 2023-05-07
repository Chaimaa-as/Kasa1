// Ce code est un exemple d'un composant React appelé "Card".
// Il utilise l'importation de la bibliothèque React
// et crée une fonction fléchée qui prend un objet `props` en paramètre.

// Le code décompose les éléments suivants :

// 1. Importation de la bibliothèque React : `import React from "react";`
// Ceci permet d'utiliser la bibliothèque React dans ce fichier.
import React from "react";

// 2. Définition du composant Card : `const Card = (props) => { ... };`
// Le composant Card est une fonction fléchée qui prend un objet `props` en paramètre.
// Les `props` sont les propriétés personnalisées que vous pouvez passer
// à un composant React pour le rendre réutilisable et dynamique.
const Card = (props) => {
  return (
    // 3. Structure JSX du composant Card :
    // Le composant Card retourne une structure JSX qui contient une `div` avec une image
    // et un titre (h1).
    // Les attributs de l'image et du titre sont définis en utilisant les propriétés
    // de l'objet `props.apartmentData` :
    // ```jsx
    // <div>
    //   <img src={props.apartmentData.cover} />
    //   <h1>{props.apartmentData.title}</h1>
    // </div>
    // ```

    // Le code entre les accolades `{}` est une expression JavaScript qui est évaluée
    // et affichée comme une valeur. Dans ce cas, `props.apartmentData.cover` est l'URL de l'image
    // et `props.apartmentData.title` est le titre de l'appartement.
    <div>
      <img src={props.apartmentData.cover} />
      <h1>{props.apartmentData.title}</h1>
    </div>
  );
};

// 4. Exportation du composant Card : `export default Card;`
// Ceci permet d'exporter le composant Card pour qu'il puisse être utilisé dans d'autres fichiers
// de votre projet.
export default Card;

// En résumé, ce code définit un composant "Card" réutilisable qui peut afficher une image
// et un titre d'un appartement en utilisant les données passées via les `props`.
