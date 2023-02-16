import '../../scss/styles.scss';
import React from 'react';
import { useState } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ApartmentGrid from '../layout/ApartmentGrid';
import Banner from '../layout/Banner';


export default function Home() {
  



  return (
    <div>
      <Header/>

      {/*On ajoute un composant Banner 
      en lui passant des attributs avec la valeur de l'image 
      (pkoi la garder ici? actuellement en background-img) 
      et du texte qu'il doit afficher */}
      {/* <Hero 
      monimage="./logo.png" 
      montexte="Chez vous, partout et ailleurs" /> */}
      
      <Banner/>
      
        <ApartmentGrid/>


        {/* // const [homeCurrentPage, setHomeCurrentPage]=useState=(1);
  // const [cardsPerPage, setCardsPerPage]=useState[6];

  // const lastCardIndex = homeCurrentPage * cardsPerPage;
  // const firstCardIndex = lastCardIndex - cardsPerPage;
  // const currentCardsPage = cardsData.slice(firstCardIndex, lastCardIndex); */}
        {/* <ApartmentGrid cardsData={currentCardsPage}/>
        <Pagination
          totalCards={cardsData.length}
          cardsPerPage={cardsPerPage}
          setHomeCurrentPage={setHomeCurrentPage}
          homeCurrentPage={homeCurrentPage}
        /> */}

      
      <Footer/>
    </div>
    
  )
}
