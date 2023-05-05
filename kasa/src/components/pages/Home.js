import "../../scss/styles.scss";
import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ApartmentsList from "../layout/ApartmentsList";
import Banner from "../layout/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner showTxt={false} />
      <ApartmentsList />
      <Footer />
    </>
  );
}

// Ce code est écrit en React, une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur. Voici une explication détaillée de chaque partie du code :

// 1. `import '../../scss/styles.scss';` : Cette ligne importe un fichier de style SCSS (un langage de prétraitement CSS) pour appliquer des styles à l'application.

// 2. Les lignes suivantes importent plusieurs composants React depuis d'autres fichiers :

//    ```
//    import React from 'react';
//    import Footer from '../layout/Footer';
//    import Header from '../layout/Header';
//    import ApartmentsList from '../layout/ApartmentsList';
//    import Banner from '../layout/Banner';
//    ```

//    - `import React from 'react';` : importe la bibliothèque React pour pouvoir utiliser ses fonctionnalités.
//    - Les autres lignes importent des composants personnalisés (Footer, Header, ApartmentsList et Banner) depuis des fichiers situés dans le dossier "layout".

// 3. `export default function Home() { ... }` : Cette partie définit un composant fonctionnel React appelé "Home" et l'exporte pour qu'il puisse être utilisé dans d'autres parties de l'application.

// 4. À l'intérieur de la fonction Home, nous avons le code JSX suivant :

//    ```
//    return (
//      <>
//        <Header/>
//        <Banner showTxt={false}/>
//        <ApartmentsList/>
//        <Footer/>
//      </>
//    )
//    ```

//    - Le code JSX ressemble à du HTML mais est utilisé dans du code JavaScript. Il permet de décrire l'interface utilisateur du composant.
//    - Les balises vides `<>...</>` sont appelées "fragments" et permettent de regrouper plusieurs éléments sans ajouter de nœud supplémentaire au DOM (Document Object Model).
//    - `<Header/>`, `<Banner showTxt={false}/>`, `<ApartmentsList/>` et `<Footer/>` sont les composants que nous avons importés précédemment. Ils sont utilisés ici pour construire l'interface utilisateur de la page d'accueil.
//    - La propriété `showTxt` du composant Banner est définie sur `false`. Cela signifie que le texte du composant Banner ne sera pas affiché sur la page d'accueil.
