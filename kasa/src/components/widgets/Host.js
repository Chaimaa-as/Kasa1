import React from 'react';

const Host = (props) => {
 
    return (
        <div className='host'>           
            <img className='host__pic' src= {props.hostData.picture} alt=''/>
            <h2 className='host__name'>{props.hostData.name}</h2>
        </div>
    );
};

export default Host;