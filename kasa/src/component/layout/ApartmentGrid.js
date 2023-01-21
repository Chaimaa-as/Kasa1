import React, { useEffect,useState } from 'react';
import Apartment from '../layout/Apartment';
import ApartmentsList from "../../logement.json";


const ApartmentGrid = () => {
  
  //SI ON VEUT RECUPERER LES DATA A TRAVERS UNE API : 
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Remarque : le tableau vide de dépendances [] indique
//   // que useEffect ne s’exécutera qu’une fois,
//   useEffect(() => {
//     fetch("./logement.json")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Remarque : il faut gérer les erreurs ici plutôt que dans
//         // un bloc catch() afin que nous n’avalions pas les exceptions
//         // dues à de véritables bugs dans les composants.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Erreur : {error.message}</div>;g
//   } else if (!isLoaded) {
//     return <div>Chargement...</div>;
//   } else {
//     return (
//       <div className='apartementGrid'>

//          {items.map(item => (
//           <Apartment key={item.id} item={item}/>
            
//         ))}
//       </div>
//     );
//   }

//ON RECUPERE LES DATA DIRECTEMENT EN IMPORTANT UN JSON
return (
          <div className='apartementGrid'>
    
             {ApartmentsList.map(item => (
              <Apartment key={item.id} item={item}/>
                
            ))}
          </div>
        );

}
export default ApartmentGrid;