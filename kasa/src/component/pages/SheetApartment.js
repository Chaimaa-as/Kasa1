import '../../scss/styles.scss';
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
            <div className='apartmentAbstract'>
                <Tags tagsList = {apartment.tags}/>
                <div>
                    <Ratings rating={apartment.rating} />
                </div>
            </div>
            <div className='apartmentContent'>
                <div className='contentDescription'>
                    <DisclosePanel title="Desciption" text={apartment.description} />
                </div>
                <div className='contentEquipement'>
                    <DisclosePanel title="Equipement" text={apartment.equipments} />
                </div>
            </div>
            <ImagesSlider urls={apartment.pictures} />
            
                
            <Footer/>
        </div>
    );
};

export default SheetApartment;