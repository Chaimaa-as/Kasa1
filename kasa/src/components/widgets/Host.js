// importe la bibliothèque React pour utiliser
// ses fonctionnalités dans ce fichier.
import React from "react";

// On définit un composant fonctionnel nommé "Host". Les `props` sont les propriétés passées au composant
// lorsqu'il est utilisé dans un autre composant.
const Host = (props) => {
  return (
    // À l'intérieur de la fonction `Host`, on retourne un élément `<div>` qui a une classe CSS
    // 'host'. Cette `<div>` contient deux éléments enfants :
    <div className="host">
      {/* Une balise `<img>` avec la classe CSS 'host__pic'. L'attribut `src` de l'image est défini par la valeur de `props.hostData.picture`. 
      Cela signifie que l'image sera chargée à partir de l'URL passée en tant que propriété `picture` dans l'objet `hostData`. */}
      <img className="host__pic" src={props.hostData.picture} alt="" />
      {/* Le texte à l'intérieur du paragraphe est défini par la valeur de `props.hostData.name`. 
      Cela signifie que le nom de l'hôte sera affiché à partir de la propriété `name` dans l'objet `hostData`. */}
      <p className="host__name">{props.hostData.name}</p>
    </div>
  );
};

// on exporte le composant `Host`comme exportation par défaut. Cela permet à d'autres fichiers de l'importer et de l'utiliser comme composant.
export default Host;
