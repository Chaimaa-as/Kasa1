import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Navigation from '../layout/Navigation'
import Logo from '../layout/Logo'
import ApartmentGrid from '../layout/ApartmentGrid'

export default function Home() {
  return (
    <div>
        <Logo/>
        <Navigation/>
        <Header/>
            <h1>
                Page d'accueil
                
            </h1>
            <ApartmentGrid/>
        <Footer/>
    </div>
  )
}
