import React from 'react';

const Host = () => {
    const name = dataCurrentAccomodation[0].host.name.split(' ');
    return (
        <div>           
            <div className='accomodation_content_host_name'>
                <span>{name[0]}</span>
                <span>{name[1]}</span>
            </div>
            <img src={dataCurrentAccomodation[0].host.picture} alt="host of this accomodation" />
            
        </div>
    );
};

export default Host;