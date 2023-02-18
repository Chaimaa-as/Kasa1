import Apartment from './Apartment';
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
  
return (
  <div className='apartmentsList'>
      {datas.currentData().map(item => (
        <Apartment key={item.id} item={item}/>
        ))}
        
        <Pagination cardsPerPage={cardPerPage} totalCards={ApartmentsList.length} setHomeCurrentPage={handlePageChange} homeCurrentPage={page}/>
  </div>
  );
};

export default ApartmentGrid;