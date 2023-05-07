// 1. Les imports en haut du fichier permettent d'importer les composants et modules nécessaires pour ce composant :
import Apartment from "./Apartment";
import ApartmentsList from "../../logement.json";
import usePagination from "../widgets/usePagination";
import Pagination from "../widgets/Pagination";
import { useState } from "react";

// Ce code est un composant React nommé ApartmentGrid qui affiche une liste d'appartements avec une pagination.
const ApartmentGrid = () => {
  // 2. Dans le composant ApartmentGrid, on initialise l'état local avec la page courante (page) et on définit le nombre de cartes d'appartements par page (cardPerPage).
  let [page, setPage] = useState(1);
  const cardPerPage = 6;

  // 3. On utilise le hook usePagination pour gérer la pagination des appartements. Il prend en paramètres la liste d'appartements (ApartmentsList) et le nombre de cartes par page (cardPerPage).
  const datas = usePagination(ApartmentsList, cardPerPage);

  // 4. La fonction handlePageChange est définie pour gérer le changement de la page courante. Elle met à jour l'état de la page et appelle la méthode jump() de l'objet datas pour changer la page.
  function handlePageChange(page) {
    setPage(page);
    datas.jump(page);
  }

  // 5. Dans le rendu du composant, on itère sur les données courantes (datas.currentData()) pour afficher chaque appartement avec le composant Apartment. Ensuite, on affiche le composant Pagination avec les propriétés nécessaires (cardsPerPage, totalCards, setHomeCurrentPage et homeCurrentPage).
  return (
    <div className="apartmentsList">
      {datas.currentData().map((item) => (
        <Apartment key={item.id} item={item} />
      ))}

      <Pagination
        cardsPerPage={cardPerPage}
        totalCards={ApartmentsList.length}
        setHomeCurrentPage={handlePageChange}
        homeCurrentPage={page}
      />
    </div>
  );
};

// 6. Enfin, on exporte le composant ApartmentGrid pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default ApartmentGrid;
