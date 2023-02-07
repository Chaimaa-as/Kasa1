import React from 'react';

const Host = (props) => {
 
    return (
        <div>           
            <img src= {props.hostData.picture}/>
            <h1>{props.hostData.name}</h1>
        
            
        </div>
    );
};

export default Host;