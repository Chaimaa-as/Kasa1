// 1. Importe la bibliothèque React pour pouvoir l'utiliser dans ce fichier.
import React from "react";
// 2. Importe une image de logo_footer à partir du dossier "assets/logo", qui se trouve deux niveaux au-dessus du dossier actuel.
import logo_footer from "../../assets/logo/logo_footer.png";
// 3. Crée un composant fonctionnel React appelé `LogoFooter`.
const LogoFooter = () => {
  return (
    <div>
      <img src={logo_footer} alt="" />
    </div>
  );
};
// Exporte le composant `Logo` comme exportation par défaut de ce fichier.
export default LogoFooter;
