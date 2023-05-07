// Ce code est un composant React appelé `ImagesSlider`. Il sert à afficher
// un diaporama d'images à partir d'une liste d'URLs d'images passée en tant que propriété
// (`props.urls`). Voici une explication détaillée de chaque partie du code :

// 1. Importation des modules nécessaires :
// ```javascript
// import React, { useState, useEffect } from 'react';
// ```
// On importe `React`, ainsi que les hooks `useState` et `useEffect` depuis la bibliothèque
// `react`.
import React, { useState, useEffect } from "react";

// 2. Déclaration du composant `ImagesSlider` :
// ```javascript
// const ImagesSlider = (props) => {
// ... le corps du composant
// };
// ```
// `ImagesSlider` est un composant fonctionnel React qui reçoit des propriétés (`props`)
// en argument.
const ImagesSlider = (props) => {
  // 3. Déclaration de l'état `currentImage` et de sa fonction de mise à jour `setCurrentImage` :
  // ```javascript
  // const [currentImage, setCurrentImage] = useState(0);
  // ```
  // `currentImage` représente l'index de l'image actuellement affichée. On initialise cet état à 0.
  const [currentImage, setCurrentImage] = useState(0);

  // 4. Utilisation de `useEffect` pour gérer le changement d'image automatiquement :
  // ```javascript
  // useEffect(() => {
  //   const timer = setTimeout(nextImage, 5000);
  //   return () => clearTimeout(timer);
  // });
  // ```
  // `useEffect` est un hook qui permet d'exécuter des effets secondaires à chaque rendu
  // du composant. Ici, on utilise `setTimeout` pour appeler la fonction `nextImage`
  // toutes les 5 secondes (5000 millisecondes). Ensuite, on retourne une fonction de nettoyage
  // qui annule le minuteur avec `clearTimeout`.
  useEffect(() => {
    const timer = setTimeout(nextImage, 5000);
    return () => clearTimeout(timer);
  });

  // 5. Déclaration de la fonction `nextImage` pour passer à l'image suivante :
  // ```javascript
  // function nextImage() {
  //   let img = currentImage + 1;
  //   if (img > props.urls.length - 1) img = 0;
  //   setCurrentImage(img);
  // }
  // ```
  // `nextImage` incrémente l'index de `currentImage`. Si l'index dépasse la taille
  // du tableau `props.urls`, on le réinitialise à 0.
  function nextImage() {
    let img = currentImage + 1;
    if (img > props.urls.length - 1) img = 0;
    setCurrentImage(img);
  }
  // 6. Déclaration de la fonction `previousImage` pour revenir à l'image précédente :
  // ```javascript
  // function previousImage() {
  //   let img = currentImage - 1;
  //   if (img < 0) img = props.urls.length - 1;
  //   setCurrentImage(img);
  // }
  // ```
  // `previousImage` décrémente l'index de `currentImage`. Si l'index devient inférieur à 0,
  // on le met à la dernière position du tableau `props.urls`.
  function previousImage() {
    let img = currentImage - 1;
    if (img < 0) img = props.urls.length - 1;
    setCurrentImage(img);
  }

  // 7. Affichage du contenu du composant :
  // ```javascript
  // return (
  //   <div className="slider-banner">
  //     <img src={props.urls[currentImage]} alt="" />
  //     <div className="imgsOnSlider">
  //       <button className="arrow--left" onClick={previousImage}></button>
  //       <button className="arrow--right" onClick={nextImage}></button>
  //       <div className="sliderNumber">{currentImage + 1}/{props.urls.length}</div>
  //     </div>
  //   </div>
  // );
  // ```
  // On affiche l'image courante à partir de `props.urls[currentImage]`,
  //ainsi que des boutons pour naviguer entre les images (`previousImage` et `nextImage`)
  // et un compteur d'images (par exemple : "2/5" signifie
  // que la deuxième image sur cinq est affichée).
  return (
    <div className="slider-banner">
      <img src={props.urls[currentImage]} alt="" />
      <div className="imgsOnSlider">
        <button className="arrow--left" onClick={previousImage}></button>
        <button className="arrow--right" onClick={nextImage}></button>
        <div className="sliderNumber">
          {currentImage + 1}/{props.urls.length}
        </div>
      </div>
    </div>
  );
};

// On exporte `ImagesSlider` pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default ImagesSlider;
