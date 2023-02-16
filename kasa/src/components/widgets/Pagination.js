import React from 'react'



const Pagination = ({totalCards, cardsPerPage, setHomeCurrentPage, homeCurrentPage}) => {
    let pages = [];

    for(let i = 1; i<= Math.ceil(totalCards/cardsPerPage); i++){
        pages.push(i)
    }



  return (
    <div className='paginationBar' >
        {
            pages.map((page, index) => {
                return <button key={index} onClick={() => setHomeCurrentPage(page)} className={page == homeCurrentPage ? 'active' :''}>{page}</button>
            })
        }

    </div>
  )
}

export default Pagination;