// Ce code est un composant React appelé "Footer". Il s'agit d'une fonction qui retourne du JSX
// (JavaScript XML) pour afficher le contenu du pied de page (footer) dans une application React.
// Voici ce que fait chaque partie du code:

// 1. `import React from 'react';` : Cette ligne importe la bibliothèque React,
// qui est nécessaire pour créer des composants React.
import React from "react";

// 2. `import LogoFooter from './LogoFooter';`: Cette ligne importe un autre composant
// nommé "LogoFooter" depuis un fichier appelé "LogoFooter.js" ou "LogoFooter.jsx" dans
// le même répertoire que ce fichier. Ce composant sera utilisé dans le code JSX ci-dessous.
import LogoFooter from "./LogoFooter";

// 3. `export default function Footer() { ... }`: Cette ligne déclare une fonction appelée
// "Footer" qui sera le composant React. La syntaxe `export default` signifie que cette fonction
// sera le module par défaut exporté par ce fichier, ce qui permet aux autres fichiers
// de l'importer en utilisant simplement `import Footer from './Footer'`.
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

// En résumé, ce composant React affiche un pied de page contenant un logo (représenté
// par le composant `LogoFooter`) et du texte pour les droits d'auteur.
