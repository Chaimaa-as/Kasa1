// En résumé, ce code crée un composant "Banner" qui affiche une balise `section`
// avec un style conditionnel et un texte en fonction de la valeur de la prop `showTxt`.

// Ce code est un composant React appelé "Banner". Il utilise les fonctionnalités de React
// et des "props" pour personnaliser son contenu et son style en fonction de la valeur
// de la "prop" `showTxt`.Voici une explication détaillée de chaque partie du code :

// 1. `import React from 'react';` : Importe la bibliothèque React pour pouvoir utiliser
// les fonctionnalités de React dans ce fichier.
import React from "react";

// 2. `const Banner = ({showTxt}) => { ... }` : Déclare une fonction fléchée appelée "Banner"
// qui est le composant React. Cette fonction prend un objet en paramètre, et grâce à
// la déstructuration d'objet, on extrait directement la propriété `showTxt` de cet objet.
const Banner = ({ showTxt }) => {
  // 3. `return ( ... )` : La fonction retourne le JSX (JavaScript XML) qui décrit l'interface
  // utilisateur du composant. Le JSX ressemble à du HTML, mais il est en réalité du JavaScript.
  return (
    <section
      // 4. `<section className={showTxt ? 'banner banner__about' : 'banner banner__hero'}>` :
      // Crée une balise HTML `section` avec la classe CSS conditionnelle. Si `showTxt` est vrai (true),
      // la classe sera "banner banner__about", sinon, elle sera "banner banner__hero".
      className={showTxt ? "banner banner__about" : "banner banner__hero"}

      // 5. `{!showTxt && <h1>Chez vous, <br/>partout et ailleurs</h1>}` :
      // Ceci est une expression JavaScript qui vérifie si `showTxt` est faux (false).
      // Si c'est le cas, il affiche le texte "Chez vous, partout et ailleurs"
      // dans une balise `h1`. Si `showTxt` est vrai, cette partie ne sera pas affichée.
    >
      {!showTxt && (
        <h1>
          Chez vous, <br />
          partout et ailleurs
        </h1>
      )}
    </section>
  );
};
export default Banner;

// Exporte le composant "Banner" comme export par défaut du module,ce qui permet d'importer et d'utiliser ce composant dans d'autres fichiers du projet.
