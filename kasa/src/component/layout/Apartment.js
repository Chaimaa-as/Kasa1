import React from 'react';

const Apartment = (props) => {
    return (
        <div>
            <h1>{props.item.title}</h1>
            <div>{props.item.location}</div>
        </div>
    );
};

export default Apartment;