import React from "react";

const Tags = (props) => {
  return (
    <div className="tagsList">
      <ul>
        {props.tagsList.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
// Ce code est un composant React fonctionnel nommé `Tags` qui affiche une liste de balises (tags) à partir d'un tableau de chaînes de caractères (`props.tagsList`). Voici une explication étape par étape du code:

// 1. `import React from 'react';` : Importe la bibliothèque React pour pouvoir utiliser ses fonctionnalités dans ce fichier.

// 2. `const Tags = (props) => { ... };` : Crée un composant fonctionnel nommé `Tags`. Ce composant accepte un objet `props` en tant qu'argument. `props` est un objet qui contient les propriétés (attributs) passées au composant lors de son utilisation.

// 3. À l'intérieur de la fonction `Tags`, on retourne une structure JSX qui représente le rendu du composant :
//    - `<div className="tagsList"> ... </div>` : Crée un élément `div` avec une classe CSS `tagsList`.
//    - `<ul> ... </ul>` : Crée un élément de liste non ordonnée (unordered list) pour afficher les éléments de la liste.
//    - `{ props.tagsList.map((text, index) => ( ... )) }` : Utilise la méthode `map` pour parcourir chaque élément du tableau `props.tagsList` et retourne un nouvel élément de liste (list item) pour chaque élément du tableau.
//        - `props.tagsList` est le tableau de chaînes de caractères (les tags) passé en tant que propriété (attribut) au composant `Tags`.
//        - `map` prend une fonction de rappel (callback) comme argument, qui est appelée pour chaque élément du tableau. Cette fonction de rappel reçoit deux arguments : l'élément actuel (`text`) et son indice (`index`).
//        - `<li key={index}>{text}</li>` : Pour chaque élément du tableau, on crée un élément de liste avec une clé unique (`key={index}`) et le texte de l'élément (`{text}`).

// 4. `export default Tags;` : Exporte le composant `Tags` en tant que module par défaut pour pouvoir l'importer et l'utiliser dans d'autres fichiers de l'application.

// Voici un exemple d'utilisation du composant `Tags` :

// ```
// import React from 'react';
// import Tags from './Tags';

// const App = () => {
//   const tagsList = ['Tag1', 'Tag2', 'Tag3'];

//   return (
//     <div>
//       <h1>Mes balises</h1>
//       <Tags tagsList={tagsList} />
//     </div>
//   );
// };

// export default App;
// ```

// Dans cet exemple, le composant `Tags` est utilisé dans un autre composant (`App`) avec la propriété `tagsList` passée comme attribut. Le composant `Tags` affichera alors une liste non ordonnée avec les éléments `Tag1`, `Tag2` et `Tag3`.
