import React from 'react';
// import imgSection from '../../assets/imgs/imgSection.png';

// Le composant a en argument un objet props qui nous permet de recuperer les attribut qui ont été passé quand on 
// a utilisé le composant
const Hero = (props) => {
    return (
        <div className="banner-home hero hero-test">
            <h1>{props.montexte}</h1>
        </div>
)}

export default Hero;