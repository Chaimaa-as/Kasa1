import '../../scss/styles.scss';
import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ApartmentGrid from '../layout/ApartmentGrid';
import Hero from '../layout/Hero';



export default function Home() {
  return (
    <div >
        
        <Header/>

        {/*On ajoute un composant Banner 
        en lui passant des attributs avec la valeur de l'image 
        (pkoi la garder ici? actuellement en background-img) 
        et du texte qu'il doit afficher */}
        <Hero 
        monimage="./logo.png" 
        montexte="Chez vous, partout et ailleurs" />
        
        <ApartmentGrid/>
       
       
        <Footer/>
    </div>
  )
}
