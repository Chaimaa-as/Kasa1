import React from 'react';

const Card = (props) => {
    return (
        <div>
            <img src= {props.apartmentData.cover}/>
            <h1>{props.apartmentData.title}</h1>
            
        </div>
    );
};

export default Card;