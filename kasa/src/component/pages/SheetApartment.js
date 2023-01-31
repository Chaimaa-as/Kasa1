import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { useParams } from 'react-router-dom';
import ApartmentsList from "../../logement.json";
import DisclosePanel from '../widgets/Collapse';
import ImagesSlider from '../widgets/ImagesSlider';
import Tags from '../widgets/Tags';
import Ratings from '../widgets/Ratings';

const SheetApartment = () => {
    const {id} = useParams()
    const apartment = ApartmentsList.find((item) => item.id === id)
    return (
        <div>
            <Header/>
            <div>{apartment.title}</div>
            <Tags tagsList = {apartment.tags}/>
            <Ratings rating={apartment.rating} />
            <DisclosePanel title="Desciption" text={apartment.description}  />
            <DisclosePanel title="Equipement" text={apartment.equipments}  />
            <ImagesSlider urls={apartment.pictures} />
            
                
            <Footer/>
        </div>
    );
};

export default SheetApartment;