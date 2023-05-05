import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}
// Ce code est un exemple de composant fonctionnel dans React, une bibliothèque JavaScript
// populaire pour créer des interfaces utilisateur. Le code définit un composant appelé `Header`.
// Passons en revue chaque partie du code :

// 1. `import React from 'react';` : Cette ligne importe la bibliothèque React
// pour pouvoir l'utiliser dans ce fichier.

// 2. `import Logo from './Logo';` : Cette ligne importe un composant appelé `Logo`
// à partir d'un fichier nommé `Logo.js` dans le même répertoire que le fichier actuel.

// 3. `import Navigation from './Navigation';` : Cette ligne importe un composant appelé
// `Navigation` à partir d'un fichier nommé `Navigation.js` dans le même répertoire que le
// fichier actuel.

// 4. `export default function Header() { ... }` : Cette ligne définit un nouveau composant
// fonctionnel appelé `Header` et l'exporte comme exportation par défaut du fichier.
// Les composants fonctionnels sont des fonctions JavaScript simples qui renvoient
// un élément JSX (syntaxe ressemblant à du HTML utilisée pour décrire la structure
// des composants React).

// 5. `return ( ... )` : La fonction `Header` retourne un élément JSX qui sera rendu
// dans le DOM lorsque le composant est utilisé.

// 6. `<header> ... </header>` : Ceci est un élément HTML standard `<header>` utilisé
// pour décrire la partie en-tête d'une page ou d'une section. Dans ce cas, il sert de conteneur
// pour les éléments `Logo` et `Navigation`.

// 7. `<Logo/>` : Ceci est une instance du composant `Logo` importé précédemment.
// Lorsque le composant `Header` est rendu, le composant `Logo` sera également rendu à cet endroit.

// 8. `<Navigation/>` : Ceci est une instance du composant `Navigation` importé précédemment.
// Lorsque le composant `Header` est rendu, le composant `Navigation` sera également rendu à cet endroit.

// En résumé, ce code crée un composant `Header` qui contient un logo et une barre de navigation.
// Lorsque vous utilisez ce composant dans une application React, il affichera le logo
// et la barre de navigation à l'intérieur d'un élément `<header>`.
