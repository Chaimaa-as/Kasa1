// Ce code est un composant React appelé `Navigation`. Il utilise la bibliothèque `react-router-dom` pour créer une barre de navigation avec deux liens : "Accueil" et "A propos". Voici une explication détaillée de chaque partie du code :

// 1. `import React from 'react';` : Importe la bibliothèque React pour utiliser les fonctionnalités de React.
import React from "react";

// 2. `import { NavLink } from 'react-router-dom';` : Importe le composant `NavLink` de la bibliothèque `react-router-dom`. `NavLink` est un composant spécial utilisé pour créer des liens de navigation qui peuvent être stylisés en fonction de si le lien est actif ou non.
import { NavLink } from "react-router-dom";

// 3. `const Navigation = () => { ... };` : Définit un composant fonctionnel React appelé `Navigation`. Ce composant ne prend pas de props.
const Navigation = () => {
  return (
    // 4. À l'intérieur du composant `Navigation`, une balise `<nav>` est utilisée pour encapsuler les éléments de navigation. Elle contient une liste non ordonnée (`<ul>`) avec la classe "navbar__tabs".
    <nav className="navbar">
      {/* // 5. À l'intérieur de la liste non ordonnée, deux composants `NavLink` sont utilisés pour créer les liens vers les routes "Accueil" (route "/") et "A propos" (route "/about"). */}
      <ul className="navbar__tabs">
        {/* // 6. Chaque `NavLink` a une propriété `to` qui spécifie la route vers laquelle le lien doit pointer. Par exemple, `to="/"` pointe vers la route racine (Accueil) et `to="/about"` pointe vers la route "A propos". */}
        <NavLink
          to="/"
          // 7. La propriété `className` de chaque `NavLink` est utilisée pour déterminer la classe CSS à appliquer en fonction de si le lien est actif ou non. Si le lien est actif (la route correspond à la route actuelle), la classe "navbar__tab--active" est appliquée. Sinon, la classe "navbar__tab--not-active" est appliquée.
          className={({ isActive }) =>
            isActive ? "navbar__tab--active" : "navbar__tab--not-active"
          }
        >
          <li>Accueil</li>
        </NavLink>
        {/* // 8. Chaque `NavLink` contient un élément de liste (`<li>`) avec le texte correspondant au nom de la route (par exemple, "Accueil" ou "A propos"). */}
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

// En résumé, ce code crée un composant de barre de navigation avec deux liens, "Accueil" et "A propos",
// qui sont stylisés différemment en fonction de si le lien est actif ou non.
