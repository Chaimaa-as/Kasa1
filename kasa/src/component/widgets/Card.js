import React from 'react';

const Card = (props) => {
    return (
        <li>
            <img src= {props.apartmentData.cover}/>
            <h1>{props.apartmentData.title}</h1>
            
        </li>
    );
};

export default Card;