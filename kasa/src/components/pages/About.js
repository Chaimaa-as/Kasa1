import '../../scss/styles.scss';
import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Banner from '../layout/Banner';
import Collapse from '../widgets/Collapse';



const About = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Collapse title="Fiablité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations 
                sont régulièrement vérifiées  par nos équipes." />
          
            <h2>Fiabilité</h2>
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations 
                sont régulièrement vérifiées  par nos équipes.</p>
            <h2>Respect</h2>
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage 
                entraînera une exclusion de notre plateforme.</p>
            <h2>Service</h2>
            <p>Nos équipes se tiennent à votre disposition pour vous fournir 
                une expérience parfaite. N'hésitez pas à nous contacter 
                si vous avez la moindre question.</p>
            <h2>Responsabilité</h2>
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes 
                que pour les voyageurs, chaque logement correspond aux critères 
                de sécurité établis par nos services. En laissant une note aussi bien 
                à l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
                que les standards sont bien respectés. Nous organisons également 
                des ateliers sur la sécurité domestique pour nos hôtes.</p>
         
            <Footer/>
        </div>
    );
};

export default About;