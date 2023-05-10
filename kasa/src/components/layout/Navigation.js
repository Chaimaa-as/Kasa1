// Ce code est un composant React appelé `Navigation`.
// Il utilise la bibliothèque `react-router-dom` pour créer une barre de navigation avec deux liens : "Accueil" et "A propos".

// Importe la bibliothèque React pour utiliser les fonctionnalités de React.
import React from "react";

// Importe le composant `NavLink` de la bibliothèque `react-router-dom`.
// `NavLink` est un composant spécial utilisé pour créer des liens de navigation qui peuvent être stylisés en fonction de si le lien est actif ou non.
import { NavLink } from "react-router-dom";

// Définit un composant fonctionnel React appelé `Navigation`. Ce composant ne prend pas de props.
const Navigation = () => {
  return (
    <nav className="navbar">
      {/* À l'intérieur de la liste non ordonnée, deux composants `NavLink` sont utilisés pour créer les liens 
      vers les routes "Accueil" (route "/") et "A propos" (route "/about"). */}
      <ul className="navbar__tabs">
        {/* Chaque `NavLink` a une propriété `to` qui spécifie la route vers laquelle le lien doit pointer et un élément (`<li>`) avec le texte correspondant . 
      Par exemple, `to="/"` pointe vers la route racine (Accueil) et `to="/about"` pointe vers la route "A propos". */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar__tab--active" : "navbar__tab--not-active"
          }
        >
          <li>Accueil</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "navbar__tab--active" : "navbar__tab--not-active"
          }
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

// Exporte le composant `Navigation` comme exportation par défaut, permettant ainsi à d'autres modules d'importer et d'utiliser ce composant.
export default Navigation;

// En résumé, ce code crée un composant de barre de navigation avec deux liens, "Accueil" et "A propos", qui sont stylisés différemment en fonction de si le lien est actif ou non.
