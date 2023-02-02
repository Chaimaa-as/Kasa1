import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import ApartmentGrid from '../layout/ApartmentGrid'
import Banner from '../layout/Banner'


export default function Home() {
  return (
    <div >
        <Header/>
        {/*On ajoute un composant Banner en lui passant des attributs avec la valeur de l'image et du texte qu'il 
        doit afficher */}
        <Banner monimage="./logo.png" montexte="Chez vous, partout et ailleurs" />
            <ApartmentGrid/>
       
        <Footer/>
    </div>
  )
}
