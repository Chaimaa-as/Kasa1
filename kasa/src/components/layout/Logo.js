// Ce code est un exemple de code React, une bibliothèque JavaScript
// pour créer des interfaces utilisateur.

// 1. `import React from 'react';` : Importe la bibliothèque React pour pouvoir l'utiliser dans ce fichier.
import React from "react";
// 2. `import logo from '../../assets/logo/logo.png';`: Importe une image de logo
// à partir du dossier "assets/logo", qui se trouve deux niveaux au-dessus du dossier actuel.
import logo from "../../assets/logo/logo.png";

// 3. `const Logo = () => { ... };` : Crée un composant fonctionnel React appelé `Logo`.
// Les composants fonctionnels sont une manière simple et concise de créer des composants dans React.
const Logo = () => {
  // 4. Le code à l'intérieur de la fonction `Logo` renvoie un élément JSX
  // (un mélange de JavaScript et HTML) qui contient un lien HTML (`<a>`) avec la classe "header__logo".
  // Ce lien a pour cible la page d'accueil ("/"), et à l'intérieur du lien, il y a une balise `<img>`
  // avec la source définie comme le logo importé et un texte alternatif "logo".
  return (
    <a href="/" className="header__logo">
      <img src={logo} alt="logo" />
    </a>
  );
};

// 5. `export default Logo;` : Exporte le composant `Logo` comme exportation par défaut de ce fichier.
// Cela permet d'importer et d'utiliser ce composant dans d'autres fichiers du projet.
export default Logo;
