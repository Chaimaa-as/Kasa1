import '../../scss/styles.scss';
import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ApartmentsList from '../layout/ApartmentsList';
import Banner from '../layout/Banner';

export default function Home() {
  return (
    <>
      <Header/>
      <Banner showTxt={false}/>
      <ApartmentsList/>      
      <Footer/>
    </>
  )
}