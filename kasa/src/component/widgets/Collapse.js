import React ,{ useState }from 'react';

// HELP SYLVAIN // doit avoir 2 etats différents (ouvert et fermé) => useeffect à mettre avant, non?

// react de savoir qu'il va devoir redessiner toutes les parties du composant 
// qui dependent de la valeur de ce state des qu il sera modifié
const Collapse = (props) => {
    

    const [isVisible,setIsVisible]=useState(true)


    function toggle(){
        setIsVisible(!isVisible)
    }

    function drawPanel(){
        // on regarde si l'attribut text passé en parametre du composant est un tableau.
        if (props.text instanceof Array){
            // si oui on affiche chaque element du tableau dans un li 
            return (
                <ul>
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
            return (<div>{props.text}</div>);
        }              
    }
    return (
        <div>
            <div>
                {props.title} 
                <button onClick={toggle}>A</button>
            </div>
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