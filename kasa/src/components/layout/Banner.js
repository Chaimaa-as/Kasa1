// En résumé, ce code crée un composant "Banner" qui affiche une balise `section`
// avec un style conditionnel et un texte en fonction de la valeur de la prop `showTxt`.

// 1. Importe la bibliothèque React pour pouvoir utiliser les fonctionnalités de React dans ce fichier.
import React from "react";

// 2. Déclare une fonction fléchée appelée "Banner" qui est le composant React.
// Cette fonction prend un objet en paramètre, et grâce à la déstructuration d'objet, on extrait directement la propriété `showTxt` de cet objet.
const Banner = ({ showTxt }) => {
  // 3. La fonction retourne le JSX (JavaScript XML) qui décrit l'interface utilisateur du composant. Le JSX ressemble à du HTML, mais il est en réalité du JavaScript.
  return (
    <section
      // 4. Crée une balise HTML `section` avec la classe CSS conditionnelle.
      // Si `showTxt` est vrai (true), la classe sera "banner banner__about", sinon, elle sera "banner banner__hero".
      className={showTxt ? "banner banner__about" : "banner banner__hero"}

      // 5. Ceci est une expression JavaScript qui vérifie si `showTxt` est faux (false).
      // Si c'est le cas, il affiche le texte "Chez vous, partout et ailleurs" dans une balise `h1`.
      // Si `showTxt` est vrai, cette partie ne sera pas affichée.
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
// Exporte le composant "Banner" comme export par défaut du module,ce qui permet d'importer et d'utiliser ce composant dans d'autres fichiers du projet.
export default Banner;
