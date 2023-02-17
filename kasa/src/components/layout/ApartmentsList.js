// import React, { useEffect,useState } from 'react';
import Apartment from './Apartment';

// On recupere toutes les donnees du json dans ApartmentsList
import ApartmentsList from "../../logement.json";
import usePagination from '../widgets/usePagination';
import Pagination from '../widgets/Pagination';
import { useState } from 'react';


const ApartmentGrid = () => {
  let [page, setPage] = useState(1)
  const cardPerPage=6
  const datas=usePagination(ApartmentsList,cardPerPage)

  function handlePageChange(page){
    setPage(page)
    datas.jump(page)
  }
  

//ON RECUPERE LES DATA DIRECTEMENT EN IMPORTANT UN JSON
return (
  <>
          <div className='apartmentsList'>
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