import React from 'react';
import redStar from '../../assets/imgs/star_grey.png';
import greyStar from '../../assets/imgs/star_red.png';

const Ratings = ({rating}) => {

    return (
        <div className="hostRating">
           {/* création d'un array de 5 positions  */}
           {/* on va appeler map en lui passant notre 1er argument ET une key*/}
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue > rating ? redStar : greyStar} alt=''/>
                )
            })}
        </div>
    );
};

export default Ratings;