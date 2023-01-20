import React from 'react';
import Logo from '../layout/Logo'
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import ApartmentGrid from '../layout/ApartmentGrid';


const Apartments = () => {
  
    return (
        <div>
            <Logo/>
            <Navigation/>
            <Header/>
            <ApartmentGrid/>
            <Footer/>
        </div>
    );
};

export default Apartments;