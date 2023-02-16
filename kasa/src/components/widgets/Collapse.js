import React ,{ useState }from 'react';


const Collapse = (props) => {
    console.log("props in collapse", props) 
    const [isVisible,setIsVisible]=useState(true)

    function toggle(){
        setIsVisible(!isVisible)
    }

    function drawPanel(){
        // on regarde si l'attribut text passé en parametre du composant est un tableau.
        if (props.text instanceof Array){
            // si oui on affiche chaque element du tableau dans un li 
            return (
                <ul className='dropdownPanel__Content equipment' >
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
            return (<div className='dropdownPanel__Content'>{props.text}</div>);
        }              
    }

    return (
        <div className='dropdownPanel'>
            <h3 className='dropdownPanel__title'>
                {props.title} 
                <button className={isVisible?'collapse__arrow_up':'collapse__arrow_up'} onClick={toggle}></button>
            </h3>
          
          
          
            {
                // si le state isVisible est vrai :
                    // on appelle la fonction qui va dessiner le contenu du panel
                // sinon on affiche juste des guillemets
                // remplacer par ternaire diretement
                // si propr.text sinnon 
                isVisible?drawPanel():""
            }
        </div>
    );
};

export default Collapse;