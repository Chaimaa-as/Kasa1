// Ce code est un exemple de composant fonctionnel dans React, une bibliothèque JavaScript
// populaire pour créer des interfaces utilisateur. Le code définit un composant appelé `Header`.
// Passons en revue chaque partie du code :

// 1. `import React from 'react';` : Cette ligne importe la bibliothèque React
// pour pouvoir l'utiliser dans ce fichier.
import React from "react";

// 2. `import Logo from './Logo';` : Cette ligne importe un composant appelé `Logo`
// à partir d'un fichier nommé `Logo.js` dans le même répertoire que le fichier actuel.
import Logo from "./Logo";

// 3. `import Navigation from './Navigation';` : Cette ligne importe un composant appelé
// `Navigation` à partir d'un fichier nommé `Navigation.js` dans le même répertoire que le
// fichier actuel.
import Navigation from "./Navigation";

// 4. `export default function Header() { ... }` : Cette ligne définit un nouveau composant
// fonctionnel appelé `Header` et l'exporte comme exportation par défaut du fichier.
// Les composants fonctionnels sont des fonctions JavaScript simples qui renvoient
// un élément JSX (syntaxe ressemblant à du HTML utilisée pour décrire la structure
// des composants React).
export default function Header() {
  // 5. `return ( ... )` : La fonction `Header` retourne un élément JSX qui sera rendu
  // dans le DOM lorsque le composant est utilisé.
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}

// En résumé, ce code crée un composant `Header` qui contient un logo et une barre de navigation.
// Lorsque vous utilisez ce composant dans une application React, il affichera le logo
// et la barre de navigation à l'intérieur d'un élément `<header>`.
