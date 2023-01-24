import React ,{ useEffect,useState }from 'react';

const DisclosePanel = (props) => {

    // on previent React que ce composant gere un etat qu'on appelle isVisible. ca permet à
    // react de savoir qu'il va devoir redessiner toutes les parties du composant qui dependent de la 
    // valeur de ce state des qu il sera modifié

    const [isVisible,setIsVisible]=useState(true)

    // on modifie la valeur du state quand on click sur le bouton et donc react mettera à jour l'affichage du composant
    function toggle(){
        setIsVisible(!isVisible)
    }

    function drawPanel(){
        // on regarde si l'attribut text passé en parametre du composant est un tableau.
        // si oui on affiche chaque element du tableau dans un li 
        // sinon on affiche directement le texte dans une div
        if (props.text instanceof Array){
            return (
                    <ul>
                    {  
                        props.text.map((t,i)=>(
                            <li key={i}>{t}</li>
                        ))                        
                    }
                    </ul>
                    )
        }
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
                // si le state isVisible est vrai on appelle la fonction qui va dessiner le contenu du panel
                // sinon on affiche juste une div vide
                isVisible?drawPanel():<div></div>
            }
        </div>
    );
};

export default DisclosePanel;