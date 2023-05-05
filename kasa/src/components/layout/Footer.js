import React from "react";
import LogoFooter from "./LogoFooter";

export default function Footer() {
  return (
    <footer>
      <div>
        <LogoFooter />
      </div>
      <div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
// Ce code est un composant React appelé "Footer". Il s'agit d'une fonction qui retourne du JSX
// (JavaScript XML) pour afficher le contenu du pied de page (footer) dans une application React.
// Voici ce que fait chaque partie du code:

// 1. `import React from 'react';` : Cette ligne importe la bibliothèque React,
// qui est nécessaire pour créer des composants React.

// 2. `import LogoFooter from './LogoFooter';`: Cette ligne importe un autre composant
// nommé "LogoFooter" depuis un fichier appelé "LogoFooter.js" ou "LogoFooter.jsx" dans
// le même répertoire que ce fichier. Ce composant sera utilisé dans le code JSX ci-dessous.

// 3. `export default function Footer() { ... }`: Cette ligne déclare une fonction appelée
// "Footer" qui sera le composant React. La syntaxe `export default` signifie que cette fonction
// sera le module par défaut exporté par ce fichier, ce qui permet aux autres fichiers
// de l'importer en utilisant simplement `import Footer from './Footer'`.

// 4. Le code JSX à l'intérieur de la fonction `Footer`:

//    a. `<footer>`: Ceci est une balise HTML standard pour représenter le pied de page (footer)
// d'une page.

//    b. `<div><LogoFooter/></div>`: Ceci est un élément `div` contenant le composant
// `LogoFooter` importé précédemment. Le composant `LogoFooter` sera rendu à cet endroit.

//    c. `<div><p>© 2020 Kasa. All rights reserved</p></div>`: Ceci est un autre élément `div`
// contenant un élément de paragraphe (`<p>`) avec du texte. Ce texte indique les droits d'auteur
// et l'année.

// 5. `return (...)`: Cette ligne retourne le JSX défini à l'intérieur des parenthèses
// pour que le composant puisse être rendu lorsqu'il est utilisé dans une application React.

// En résumé, ce composant React affiche un pied de page contenant un logo (représenté
// par le composant `LogoFooter`) et du texte pour les droits d'auteur.
