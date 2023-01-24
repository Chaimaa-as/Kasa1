import React from 'react';
import imgSection from '../../assets/imgs/imgSection.png';
// import './styles/Banner.scss';

// Le composant a en argument un objet props qui nous permet de recuperer les attribut qui ont été passé quand on 
// a utilisé le composant
const Banner = (props) => {
    return (
        <div className="banner">
            {/* on recupere dans l objet props la valeur de l attribut "monimage" pour afficher l'image */}
            <img src={imgSection} className="imgBanner" alt=""/>
            {/* on recupere dans l objet props la valeur de l'attribut "montexte" pour afficher le texte */}
            <h1 className="titleBanner">{props.montexte}</h1>
        </div>
    );
};

export default Banner;