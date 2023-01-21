import React ,{ useEffect,useState }from 'react';

const DisclosePanel = (props) => {
    const [isVisible,setIsVisible]=useState(true)

    function toggle(){
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <div>
                {props.title} 
                <button onClick={toggle}>A</button>
            </div>
            {
                isVisible?
                    props.text instanceof Array?
                        <ul>
                        {
                            
                            props.text.map(t=>(
                                <li>{t}</li>
                            ))
                            
                        }
                        </ul>
                        :<div>
                            {props.text}
                        </div>
                :<div></div>
            }
        </div>
    );
};

export default DisclosePanel;