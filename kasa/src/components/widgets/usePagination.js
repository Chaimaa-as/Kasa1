import { useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;

    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;
// Ce code est un exemple d'un hook personnalisé pour la pagination des données dans une application React. Il utilise le hook `useState` pour gérer l'état de la pagination. Voici ce que fait chaque partie du code :

// 1. Importation de `useState` depuis la bibliothèque `react`:

// ```javascript
// import { useState } from "react";
// ```

// 2. Déclaration de la fonction `usePagination`, qui prend en entrée deux paramètres : `data` et `itemsPerPage`. `data` représente les données à paginer, et `itemsPerPage` est le nombre d'éléments à afficher par page.

// ```javascript
// function usePagination(data, itemsPerPage) {
//   // ...
// }
// ```

// 3. Utilisation de `useState` pour créer une variable d'état `currentPage` et sa méthode de mise à jour `setCurrentPage`. La page courante est initialisée à 1.

// ```javascript
// const [currentPage, setCurrentPage] = useState(1);
// ```

// 4. Détermination du nombre maximum de pages à partir des données et du nombre d'éléments par page.

// ```javascript
// const maxPage = Math.ceil(data.length / itemsPerPage);
// ```

// 5. Création de la fonction `currentData` qui calcule les indices de début et de fin des données pour la page courante, puis extrait et renvoie les données correspondantes.

// ```javascript
// function currentData() {
//   const begin = (currentPage - 1) * itemsPerPage;
//   const end = begin + itemsPerPage;
//   return data.slice(begin, end);
// }
// ```

// 6. Création des fonctions `next`, `prev` et `jump` pour naviguer entre les pages. `next` avance à la page suivante, `prev` revient à la page précédente et `jump` saute à une page spécifique.

// ```javascript
// function next() {
//   setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
// }

// function prev() {
//   setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
// }

// function jump(page) {
//   const pageNumber = Math.max(1, page);
//   setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
// }
// ```

// 7. La fonction `usePagination` renvoie un objet contenant les fonctions `next`, `prev`, `jump`, `currentData`, ainsi que les valeurs `currentPage` et `maxPage`.

// ```javascript
// return { next, prev, jump, currentData, currentPage, maxPage };
// ```

// 8. Enfin, le hook personnalisé `usePagination` est exporté pour être utilisé dans d'autres parties de l'application.

// ```javascript
// export default usePagination;
// ```

// En résumé, ce code définit un hook personnalisé pour gérer la pagination des données dans une application React. Vous pouvez utiliser ce hook dans vos composants pour afficher et naviguer facilement entre les pages de données.
