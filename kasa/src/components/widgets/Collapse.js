import React ,{ useState }from 'react';

const Collapse = (props) => {

    const [isVisible,setIsVisible]=useState(false)
    
    return (
        <div className='collapsePanel'>
            <div className='collapsePanel__title'>{props.title} 
                <button 
                    className={isVisible?
                        'collapsePanel__arrow--up active':'collapsePanel__arrow--down active'} 
                        onClick={()=>setIsVisible(!isVisible)}></button>
            </div>
          
            {
                isVisible?
                    props.text instanceof Array?
                    <ul className='collapsePanel__equipment content' >
                        {  
                            props.text.map((text,index)=>(
                                <li key={index}>{text}</li>
                                ))                        
                            }
                        </ul>
                    :
                    <div className='collapsePanel__description content'>{props.text}</div>
                :
                <></>
            }
        </div>
    );
};

export default Collapse;
