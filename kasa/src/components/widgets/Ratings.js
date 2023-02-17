import React from 'react';
import redStar from '../../assets/imgs/star_grey.png';
import greyStar from '../../assets/imgs/star_red.png';
// @use '../../scss/widgets/ratings.scss';


const Ratings = ({rating}) => {

    return (
        <div className="hostRating">
                {/* soit un tableau avec star vide ou pleine */}
                {/* tableau à faire avant le return et mapper sur le tableau */}
                {/* boucle pour pouvoir pousser dans le tableau */}

            {/* OU */}

                {/* utiliser le spread op //...Array(5) apres .map (index avec trenaire et voir cahioer brouillon pour methode) 
                => me créé un tableau à la volée ATTENTION mettre en index 5 pour bloquer le tableau que je viens de créer */}
           
           {/* création d'un array de 5 positions (comme le rating est en objet et non en array) */}
           {/* spread operator pour ne pas avoir à écrire [1,2,3,4,5] */}
           {/* on va appeler map en lui passant notre 1er argument ET toujours utiliser 
           une key donc on lui passe index en 2e argument éviter de mettre les index en key en general!*/}
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue > rating ? redStar : greyStar} alt="" />
                )
            })}

            
        </div>
    );
};

export default Ratings;