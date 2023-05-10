// Importe la bibliothèque React pour pouvoir utiliser ses fonctionnalités dans ce fichier.
import React from "react";

// Crée un composant fonctionnel nommé `Tags`. Ce composant accepte un objet `props` en tant qu'argument.
// `props` est un objet qui contient les propriétés (attributs) passées au composant lors de son utilisation.
const Tags = (props) => {
  return (
    // À l'intérieur de la fonction `Tags`, on retourne une structure JSX qui représente le rendu du composant :

    //        - `<li key={index}>{text}</li>` : Pour chaque élément du tableau, on crée un élément de liste avec une clé unique (`key={index}`) et le texte de l'élément (`{text}`).
    <div className="tagsList">
      {/* Crée un élément de liste non ordonnée (unordered list) pour afficher les éléments de la liste. */}
      <ul>
        {/* - `props.tagsList` est le tableau de chaînes de caractères (les tags) passé en tant que propriété (attribut) au composant `Tags`. 
            - 'props.tagsList.map' Utilise la méthode `map` pour parcourir chaque élément du tableau `props.tagsList`et retourne un nouvel élément de liste (list item) pour chaque élément du tableau. 
            - `map` prend une fonction de rappel (callback) comme argument, qui est appelée pour chaque élément du tableau. Cette fonction de rappel reçoit deux arguments : 
              l'élément actuel (`text`) et son indice (`index`). */}
        {props.tagsList.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

// Exporte le composant `Tags` en tant que module par défaut pour pouvoir l'importer et l'utiliser dans d'autres fichiers de l'application.
export default Tags;
