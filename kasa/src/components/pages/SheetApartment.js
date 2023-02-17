import '../../scss/styles.scss';
import Error from './Error';
import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { useParams } from 'react-router-dom';
import ApartmentsList from "../../logement.json";
import Gallery from '../widgets/Gallery';
import Collapse from '../widgets/Collapse';
import Tags from '../widgets/Tags';
import Ratings from '../widgets/Ratings';
import Host from '../widgets/Host';



const SheetApartment = () => {
    const {id} = useParams()
    const apartment= ApartmentsList.find((item) => item.id === id)
    return (
       !apartment ? <Error/> : 
        <div>
            <Header/>
            <Gallery urls={apartment.pictures} />
            
            {/* BLOC HEADER */}
            <section className='apartmentSheet'>

                <div className='apartmentSheet__header'>
                    <div>
                        <h1>{apartment.title}</h1>
                        <h2>{apartment.location}</h2>
                    </div>
                    <Tags tagsList = {apartment.tags}/>
                </div>
        
                
                <div className='apartmentSheet__host'>
                    <Host hostData={apartment.host} />
                    <Ratings rating={apartment.rating}/>
                </div>

            </section>

            {/* BLOC CONTENT */}
            <section className='apartmentSheet__content'>
                <Collapse title="Description" text={apartment.description} />
                <Collapse title="Equipement" text={apartment.equipments} />
            </section>

            <Footer/>
        </div>
    );
};

export default SheetApartment;