import React from 'react';
// import imgSection from '../../assets/imgs/imgSection.png';

// Le composant a en argument un objet props qui nous permet de recuperer les attribut qui ont été passé quand on 
// a utilisé le composant
const Banner = (props) => {
    return (
        <div className="hero-low-opacity-bg-img">
            <h1>{props.montexte}</h1>
        </div>
)}
            
            //{/* on recupere dans l objet props la valeur de l attribut "monimage" pour afficher l'image */}
                // <div className="hero__img">
                   // {/* <img src={imgSection} alt=""/> */}
                // </div>
               // {/* <div className="hero__overlay"></div> */}
           // {/* on recupere dans l objet props la valeur de l'attribut "montexte" pour afficher le texte */}
        //         <div className="hero__title">
        //             <h1>{props.montexte}</h1>
        //         </div>
            
        // </div>
//     );
// };

export default Banner;