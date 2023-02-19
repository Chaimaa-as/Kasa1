import React ,{ useState }from 'react';

const Collapse = (props) => {

    const [isVisible,setIsVisible]=useState(false)
    

    return (
        <div className='collapsePanel'>
            <div className='collapsePanel__title'>{props.title} 
                <button 
                    className={isVisible?'collapsePanel__arrow--up active':'collapsePanel__arrow--down active'} 
                    onClick={()=>setIsVisible(!isVisible)}></button>
            </div>
          
            {/* // si le state isVisible est vrai : appel de la fonction 
            // sinon on affiche juste des guillemets */}
            {
                isVisible?
                    props.text instanceof Array?
                    <ul className='collapsePanel__equipment' >
                        {  
                            props.text.map((text,index)=>(
                                <li key={index}>{text}</li>
                                ))                        
                            }
                        </ul>
                    :
                    <div className='collapsePanel__description'>{props.text}</div>
                :
                <></>
            }
        </div>
    );
};

export default Collapse;
