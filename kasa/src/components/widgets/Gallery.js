// Il sert à afficher un diaporama d'images à partir d'une liste d'URLs d'images passée en tant que propriété (`props.urls`).

// Importation des modules nécessaires :`React`, ainsi que les hooks `useState` et `useEffect` depuis la bibliothèque `react`.
import React, { useState, useEffect } from "react";

// Déclaration du composant `ImagesSlider` est un composant fonctionnel React qui reçoit des propriétés (`props`) en argument.
const ImagesSlider = (props) => {
  // Déclaration de l'état `currentImage` et de sa fonction de mise à jour `setCurrentImage` :
  // `currentImage` représente l'index de l'image actuellement affichée.
  const [currentImage, setCurrentImage] = useState(0); // On initialise cet état à 0.

  // Utilisation de `useEffect` pour gérer le changement d'image automatiquement
  useEffect(() => {
    // Ici, on utilise `setTimeout` pour appeler la fonction `nextImage` toutes les 5 secondes (5000 millisecondes).
    const timer = setTimeout(nextImage, 5000);
    // Ensuite, on retourne une fonction de nettoyage qui annule le minuteur avec `clearTimeout`.
    return () => clearTimeout(timer);
  });

  // Déclaration de la fonction `nextImage` pour passer à l'image suivante :
  function nextImage() {
    // `nextImage` incrémente l'index de `currentImage`.
    let img = currentImage + 1;
    // Si l'index dépasse la taille du tableau `props.urls`, on le réinitialise à 0.
    if (img > props.urls.length - 1) img = 0;
    setCurrentImage(img);
  }
  // Déclaration de la fonction `previousImage` pour revenir à l'image précédente :
  function previousImage() {
    // `previousImage` décrémente l'index de `currentImage`. Si l'index devient inférieur à 0,
    let img = currentImage - 1;
    // on le met à la dernière position du tableau `props.urls`.
    if (img < 0) img = props.urls.length - 1;
    setCurrentImage(img);
  }

  // Affichage du contenu du composant :
  // ainsi que des boutons pour naviguer entre les images (`previousImage` et `nextImage`)
  // et un compteur d'images (par exemple : "2/5" signifie que la deuxième image sur cinq est affichée).
  return (
    <div className="slider-banner">
      {/* // On affiche l'image courante à partir de `props.urls[currentImage]`,  */}
      <img src={props.urls[currentImage]} alt="" />
      <div className="imgsOnSlider">
        {/* ainsi que des boutons pour naviguer entre les images (`previousImage` et `nextImage`) */}
        <button className="arrow--left" onClick={previousImage}></button>
        <button className="arrow--right" onClick={nextImage}></button>
        {/* // et un compteur d'images (par exemple : "2/5" signifie que la deuxième image sur cinq est affichée). */}
        <div className="sliderNumber">
          {currentImage + 1}/{props.urls.length}
        </div>
      </div>
    </div>
  );
};

// On exporte `ImagesSlider` pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default ImagesSlider;
