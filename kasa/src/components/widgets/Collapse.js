import React ,{ useState }from 'react';

const Collapse = (props) => {
    console.log("props in collapse", props) 
    const [isVisible,setIsVisible]=useState(false)

    function toggle(){
        setIsVisible(!isVisible)
    }

    function drawPanel(){
        // on regarde si l'attribut text passé en parametre du composant est un tableau.
        if (props.text instanceof Array){
            // si oui on affiche chaque element du tableau dans un li 
            return (
                <ul className='collapsePanel__equipment' >
                    {  
                        props.text.map((text,index)=>(
                            <li key={index}>{text}</li>
                            ))                        
                        }
                    </ul>
                    )
                }
        // sinon on affiche directement le texte dans une div
        else{
            return (<div className='collapsePanel__description'>{props.text}</div>);
        }              
    }

    return (
        <div className='collapsePanel'>
            <div className='collapsePanel__title'>
                {props.title} 
                <button className={isVisible?'collapsePanel__arrow--up active':'collapsePanel__arrow--down active'} onClick={toggle}></button>
            </div>
          
            {/* // si le state isVisible est vrai : appel de la fonction 
            // sinon on affiche juste des guillemets */}
            {
                isVisible?drawPanel():""
            }
        </div>
    );
};

export default Collapse;