import React from 'react';

const Host = (props) => {
    return (
        <div className='host'>           
            <img className='host__pic' src= {props.hostData.picture} alt=''/>
            <p className='host__name'>{props.hostData.name}</p>
        </div>
    );
};

export default Host;