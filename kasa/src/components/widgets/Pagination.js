import React from "react";

const Pagination = ({
  totalCards,
  cardsPerPage,
  setHomeCurrentPage,
  homeCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="paginationBar">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setHomeCurrentPage(page)}
            className={page === homeCurrentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
// Ce code est un composant React appelé "Pagination". Il est utilisé pour afficher
// une barre de pagination et gérer le changement de page dans une liste de cartes.
// Voici une explication détaillée du code:

// 1. On commence par importer React pour utiliser les fonctionnalités de React.

// 2. Ensuite, on définit un composant fonctionnel appelé "Pagination".
// Ce composant prend en paramètre un objet contenant les propriétés suivantes :
//    - totalCards: le nombre total de cartes à afficher
//    - cardsPerPage: le nombre de cartes à afficher par page
//    - setHomeCurrentPage: une fonction pour mettre à jour la page courante
//    - homeCurrentPage: le numéro de la page courante

// 3. On initialise un tableau "pages" vide qui contiendra les numéros de page.

// 4. On utilise une boucle "for" pour calculer le nombre total de pages en divisant
// "totalCards" par "cardsPerPage" et en arrondissant à l'entier supérieur avec "Math.ceil()".
// Pour chaque page, on ajoute son numéro dans le tableau "pages".

// 5. On retourne un élément "div" avec la classe "paginationBar" qui contient
// une liste de boutons générés à partir du tableau "pages".

// 6. On utilise la méthode "map" pour parcourir le tableau "pages" et créer un bouton
// pour chaque page. Chaque bouton a un attribut "key" avec la valeur de l'index pour aider
// React à gérer efficacement la liste.

// 7. On ajoute un gestionnaire d'événements "onClick" au bouton qui appelle la fonction
// "setHomeCurrentPage" avec le numéro de la page en paramètre. Ceci mettra à jour
// la page courante lorsque l'utilisateur clique sur le bouton.

// 8. On utilise une expression ternaire pour déterminer si la classe "active" doit être
// ajoutée ou non au bouton. Si la page est la page courante, la classe "active" sera ajoutée,
// sinon le bouton n'aura pas de classe supplémentaire.

// 9. Finalement, on exporte le composant "Pagination" pour pouvoir l'utiliser dans d'autres
// parties de l'application.
