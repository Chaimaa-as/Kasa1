import React from 'react';


function FlatHeader(props) {
   console.log("props in apartment header", props) 

  return (
    <div className='flat-Header'>


        <div className='apartment__title-location'>
            <h1 className='apartment__title'>{props.title}</h1>
            <h2 className='apartment__location'>{props.location}</h2>
        </div>



        <div className='apartment__tags'>
         
        </div>
        


        <div className='apartment__owner'>

            <div className='apartment__host'>

          

            </div>

            <div className='apartment__ratings'>

           
                
            </div>
        </div>

    </div>    
  )
}

export default FlatHeader