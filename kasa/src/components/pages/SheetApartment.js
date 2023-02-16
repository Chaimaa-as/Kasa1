import '../../scss/styles.scss';
import Error from './Error';
import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { useParams } from 'react-router-dom';
import ApartmentsList from "../../logement.json";
import ImagesSlider from '../widgets/ImagesSlider';
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
            <ImagesSlider urls={apartment.pictures} />
            
            <section className='apartmentDetails'>

                <div className='apartment-abstracts'>

                    <div className='apartment__header'>
                        <div className='apartment__title-location'>
                            <h1 className='apartment__title'>{apartment.title}</h1>
                            <p className='apartment__location'>{apartment.location}</p>
                        </div>
                        <div className='apartment__tags'>
                            <Tags tagsList = {apartment.tags}/>
                        </div>
                    </div>

                    <div className='apartment__owner'>
                        <div className='apartment__host'>
                            <Host hostData={apartment.host} />
                        </div>
                        <div className='apartment__ratings'>
                            <Ratings rating={apartment.rating} />
                        </div>
                    </div>
                </div>
                
                <div className='apartment-content'>
                    <div className='apartment-content__details'>
                        <Collapse title="Desciption" text={apartment.description} />
                    </div>
                    <div className='apartment-content__details'>
                        <Collapse title="Equipement" text={apartment.equipments} />
                    </div>
                </div>
         
            </section>


{/* mes tests */}

            {/* <FlatHeader title={apartment.title} location={apartment.location}/>
            

            <FlatContent title="Desciption" text={apartment.description}/>
            <FlatContent 
            title="Equipement" 
            content={apartment.equipments.map(equipmentItem => (
                <li>{equipmentItem}</li>)
                )}/> */}

{/* fin mes tests */}

            <Footer/>
        </div>
    );
};

export default SheetApartment;