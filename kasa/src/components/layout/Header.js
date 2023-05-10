// 1. importe la bibliothèque React pour pouvoir l'utiliser dans ce fichier.
import React from "react";

// 2. importe un composant appelé `Logo`à partir d'un fichier nommé `Logo.js` dans le même répertoire que le fichier actuel.
import Logo from "./Logo";

// 3. importe un composant appelé `Navigation` à partir d'un fichier nommé `Navigation.js` dans le même répertoire que le fichier actuel.
import Navigation from "./Navigation";

// 4. définit un nouveau composant fonctionnel appelé `Header` et l'exporte comme exportation par défaut du fichier.
export default function Header() {
  // 5. La fonction `Header` retourne un élément JSX qui sera rendu dans le DOM lorsque le composant est utilisé.
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}
