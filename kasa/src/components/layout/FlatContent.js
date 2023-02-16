import React from 'react';

function FlatContent(props) {
    console.log("props in apartment content", props) 
  
  
    return (
        <div className='flat-content'>

            <div className='One'>
                <h3>{props.title}</h3>
            </div>

{/* <Collapse title="Desciption" text={apartment.description} /> */}
            <div className='One-Two'>
                <p>{props.text}</p>
            </div>

{/* <Collapse title="Equipement" text={apartment.equipments} /> */}
            <div className='One-three'>
                <ul className=''>
                    <li>{props.content}</li>
                </ul>
            </div>
        </div>
  )
}

export default FlatContent;