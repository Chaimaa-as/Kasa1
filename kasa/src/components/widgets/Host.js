import React from "react";

const Host = (props) => {
  return (
    <div className="host">
      <img className="host__pic" src={props.hostData.picture} alt="" />
      <p className="host__name">{props.hostData.name}</p>
    </div>
  );
};

export default Host;
// Ce code est un composant React fonctionnel nommé "Host", qui affiche des informations
// sur un hôte, telles que sa photo et son nom. Voici une explication détaillée du code :

// 1. `import React from 'react';` : Cette ligne importe la bibliothèque React pour utiliser
// ses fonctionnalités dans ce fichier.

// 2. `const Host = (props) => { ... };` : On définit un composant fonctionnel nommé "Host".
// Les composants fonctionnels sont des fonctions qui prennent un objet `props` en entrée
// et retournent un élément React (JSX). Les `props` sont les propriétés passées au composant
// lorsqu'il est utilisé dans un autre composant.

// 3. À l'intérieur de la fonction `Host`, on retourne un élément `<div>` qui a une classe CSS
// 'host'. Cette `<div>` contient deux éléments enfants :

//     a. `<img className='host__pic' src= {props.hostData.picture} alt=''/>` :
// Une balise `<img>` avec la classe CSS 'host__pic'. L'attribut `src` de l'image est défini
// par la valeur de `props.hostData.picture`. Cela signifie que l'image sera chargée
// à partir de l'URL passée en tant que propriété `picture` dans l'objet `hostData`.

//     b. `<p className='host__name'>{props.hostData.name}</p>` : Un élément de paragraphe
// `<p>` avec la classe CSS 'host__name'. Le texte à l'intérieur du paragraphe est défini
// par la valeur de `props.hostData.name`. Cela signifie que le nom de l'hôte sera affiché
// à partir de la propriété `name` dans l'objet `hostData`.

// 4. `export default Host;` : À la fin du fichier, on exporte le composant `Host`
// comme exportation par défaut. Cela permet à d'autres fichiers de l'importer
// et de l'utiliser comme composant.
