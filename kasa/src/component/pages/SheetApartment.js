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
import Host from '../widgets/Host';


const SheetApartment = () => {
    const {id} = useParams()
    const apartment = ApartmentsList.find((item) => item.id === id)
    return (
        <div>
            <Header/>
            <ImagesSlider urls={apartment.pictures} />
            <div className='apartTitle'>{apartment.title}</div>
            <div className='apartmentAbstract'>
                <Tags tagsList = {apartment.tags}/>
                <Ratings rating={apartment.rating} />
                <Host hostData={apartment.host} />
            </div>
            <div className='apartmentContent'>
                <div className='contentDescription child 1'>
                    <DisclosePanel title="Desciption" text={apartment.description} />
                </div>
                <div className='contentEquipement child 2'>
                    <DisclosePanel title="Equipement" text={apartment.equipments} />
                </div>
            </div>
            
            
                
            <Footer/>
        </div>
    );
};

export default SheetApartment;