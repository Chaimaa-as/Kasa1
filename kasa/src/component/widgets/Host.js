import React from 'react';

const Host = (props) => {
 
    return (
        <div className='host-infos'>           
            <img src= {props.hostData.picture} alt=''/>
            <h1>{props.hostData.name}</h1>
        
            
        </div>
    );
};

export default Host;