import React from 'react';
import redStar from '../../assets/imgs/star_grey.png';
import greyStar from '../../assets/imgs/star_red.png';


const Ratings = ({rating}) => {

    return (
        <div className="host_stars">
                {/* soit un tableau avec star vide ou pleine */}
                {/* tableau à faire avant le return et mapper sur le tableau */}
                {/* boucle pour pouvoir pousser dans le tableau */}

            {/* OU */}

                {/* utiliser le spread op //...Array(5) apres .map (index avec trenaire et voir cahioer brouillon pour methode) 
                => me créé un tableau à la volée ATTENTION mettre en index 5 pour bloquer le tableau que je viens de créer */}
           
           
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