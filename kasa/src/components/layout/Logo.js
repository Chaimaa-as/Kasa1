// 1. Importe la bibliothèque React pour pouvoir l'utiliser dans ce fichier.
import React from "react";
// 2. Importe une image de logo à partir du dossier "assets/logo", qui se trouve deux niveaux au-dessus du dossier actuel.
import logo from "../../assets/logo/logo.png";

// 3. Crée un composant fonctionnel React appelé `Logo`.
const Logo = () => {
  // 4. Ce lien a pour cible la page d'accueil ("/"), et à l'intérieur du lien, il y a une balise `<img>`avec la source définie.
  return (
    <a href="/" className="header__logo">
      <img src={logo} alt="logo" />
    </a>
  );
};

// Exporte le composant `Logo` comme exportation par défaut de ce fichier.
export default Logo;
