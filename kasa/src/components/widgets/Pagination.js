// import React pour utiliser les fonctionnalités de React.
import React from "react";

// définit un composant fonctionnel appelé "Pagination" qui prend en paramètre un objet contenant les propriétés suivantes :
const Pagination = ({
  totalCards, //    - totalCards: le nombre total de cartes à afficher
  cardsPerPage, //    - cardsPerPage: le nombre de cartes à afficher par page
  setHomeCurrentPage, //    - setHomeCurrentPage: une fonction pour mettre à jour la page courante
  homeCurrentPage, //    - homeCurrentPage: le numéro de la page courante
}) => {
  // On initialise un tableau "pages" vide qui contiendra les numéros de page.
  let pages = [];

  // On utilise une boucle "for" pour calculer le nombre total de pages en divisant "totalCards" par "cardsPerPage"
  // et en arrondissant à l'entier supérieur avec "Math.ceil()".
  // Pour chaque page, on ajoute son numéro dans le tableau "pages".
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }

  // On retourne un élément "div" avec la classe "paginationBar" qui contient une liste de boutons générés à partir du tableau "pages".
  return (
    <div className="paginationBar">
      {/* On utilise la méthode "map" pour parcourir le tableau "pages" et créer un bouton pour chaque page. 
      Chaque bouton a un attribut "key" avec la valeur de l'index pour aider React à gérer efficacement la liste. */}
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            // On ajoute un gestionnaire d'événements "onClick" au bouton qui appelle la fonction "setHomeCurrentPage" avec le numéro de la page en paramètre.
            // Ceci mettra à jour la page courante lorsque l'utilisateur clique sur le bouton.
            onClick={() => setHomeCurrentPage(page)}
            // utilise une expression ternaire pour déterminer si la classe "active" doit être ajoutée ou non au bouton.
            // Si la page est la page courante, la classe "active" sera ajoutée,
            // sinon le bouton n'aura pas de classe supplémentaire.
            className={page === homeCurrentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

// on exporte le composant "Pagination" pour pouvoir l'utiliser dans d'autres parties de l'application.
export default Pagination;
