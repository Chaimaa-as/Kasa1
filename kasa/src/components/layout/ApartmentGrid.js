// import React, { useEffect,useState } from 'react';
import Apartment from './Apartment';

// On recupere toutes les donnees du json dans ApartmentsList
import ApartmentsList from "../../logement.json";
import usePagination from '../widgets/usePagination';
import Pagination from '../widgets/Pagination';
import { useState } from 'react';
// import '../../scss/abstracts/_fonts.scss';
// import '../../scss/components/_cards.scss';
// import '../../scss/components/_apartmentGrid.scss';

const ApartmentGrid = () => {
  let [page, setPage] = useState(1)
  const cardPerPage=6
  const datas=usePagination(ApartmentsList,cardPerPage)

  function handlePageChange(page){
    setPage(page)
    datas.jump(page)
  }
  
  //SI ON VEUT RECUPERER LES DATA A TRAVERS UNE API : 
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Remarque : le tableau vide de dépendances [] indique
//   // que useEffect ne s’exécutera qu’une fois,
//   useEffect(() => {
//     fetch("./logement.json")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Remarque : il faut gérer les erreurs ici plutôt que dans
//         // un bloc catch() afin que nous n’avalions pas les exceptions
//         // dues à de véritables bugs dans les composants.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Erreur : {error.message}</div>;g
//   } else if (!isLoaded) {
//     return <div>Chargement...</div>;
//   } else {
//     return (
//       <div className='apartementGrid'>

//          {items.map(item => (
//           <Apartment key={item.id} item={item}/>
            
//         ))}
//       </div>
//     );
//   }

//ON RECUPERE LES DATA DIRECTEMENT EN IMPORTANT UN JSON
return (
  <>
          <div className='gallery'>
            {/* ApartmentsList est un tableau contenant les données de chaque appartement
            Avec la fonction map on cré pour chaque element du tableau un composant
          Apartment auquel on passe dans l attribut item les données d'un appartement */}
             {datas.currentData().map(item => (
               <Apartment key={item.id} item={item}/>
               
               ))}
               <Pagination cardsPerPage={cardPerPage} totalCards={ApartmentsList.length} setHomeCurrentPage={handlePageChange} homeCurrentPage={page}/>
          </div>
          </>
        );

}
export default ApartmentGrid;