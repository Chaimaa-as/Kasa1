import React from 'react';
import Logo from '../layout/Logo'
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import { useParams } from 'react-router-dom';
import ApartmentsList from "../../logement.json";
import DisclosePanel from '../widgets/DisclosePanel';
import ImagesSlider from '../widgets/ImagesSlider';

const SheetApartment = () => {
    const {id} = useParams()
    const apartment = ApartmentsList.find((item) => item.id === id)
    return (
        <div>
            <Logo/>
            <Navigation/>
            <Header/>
            <div>{apartment.title}</div>
            <DisclosePanel title="Desciption" text={apartment.description}  />
            <DisclosePanel title="Equipement" text={apartment.equipments}  />
            <ImagesSlider urls={apartment.pictures} />
            
                
            <Footer/>
        </div>
    );
};

export default SheetApartment;