import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Navigation from '../layout/Navigation'
import Logo from '../layout/Logo'

export default function Home() {
  return (
    <div>
        <Logo/>
        <Navigation/>
        <Header/>
            <h1>
                Page d'accueil
            </h1>
        <Footer/>
    </div>
  )
}
