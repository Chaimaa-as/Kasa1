import "../../scss/styles.scss";
import Error from "./Error";
import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useParams } from "react-router-dom";
import ApartmentsList from "../../logement.json";
import Gallery from "../widgets/Gallery";
import Collapse from "../widgets/Collapse";
import Tags from "../widgets/Tags";
import Ratings from "../widgets/Ratings";
import Host from "../widgets/Host";

const SheetApartment = () => {
  // Sur cette fiche logement, récupérer l'identifiant mis en paramètre dans l'URL.
  // Grâce à celui-ci, il est possible de trouver le logement avec l'aide de la fonction
  // "find".
  const { id } = useParams();
  const apartment = ApartmentsList.find((item) => item.id === id);
  return !apartment ? (
    <Error />
  ) : (
    <div>
      <Header />
      <Gallery urls={apartment.pictures} />

      {/* BLOC HEADER */}
      <section className="apartmentSheet">
        <div className="apartmentSheet__header">
          <div>
            <h1>{apartment.title}</h1>
            <h2>{apartment.location}</h2>
          </div>
          <Tags tagsList={apartment.tags} />
        </div>
        <div className="apartmentSheet__host">
          <Host hostData={apartment.host} />
          <Ratings rating={apartment.rating} />
        </div>
      </section>

      {/* BLOC CONTENT */}
      <section className="apartmentSheet__content">
        <Collapse title="Description" text={apartment.description} />
        <Collapse title="Equipement" text={apartment.equipments} />
      </section>

      <Footer />
    </div>
  );
};

export default SheetApartment;
// Dans ce code, nous avons un composant React nommé "SheetApartment" qui affiche
// les détails d'un logement. Voici une explication simple de chaque partie du code :

// 1. `import '../../scss/styles.scss';` : Importe les styles CSS pour ce composant.
// 2. `import Error from './Error';` : Importe le composant "Error" qui sera utilisé
// pour afficher une erreur si le logement n'est pas trouvé.
// 3. `import React from 'react';` : Importe la bibliothèque React pour créer le composant.
// 4. `import Footer from '../layout/Footer';` : Importe le composant "Footer"
// pour l'afficher à la fin de la page.
// 5. `import Header from '../layout/Header';` : Importe le composant "Header"
// pour l'afficher en haut de la page.
// 6. `import { useParams } from 'react-router-dom';` :
//Importe la fonction "useParams" de la bibliothèque "react-router-dom" pour accéder
// aux paramètres de l'URL.
// 7. `import ApartmentsList from "../../logement.json";` :
// Importe la liste des logements depuis le fichier JSON "logement.json".
// 8. `import Gallery from '../widgets/Gallery';` : Importe le composant "Gallery"
// pour afficher une galerie d'images.
// 9. `import Collapse from '../widgets/Collapse';` : Importe le composant "Collapse"
// pour afficher des sections rétractables.
// 10. `import Tags from '../widgets/Tags';` : Importe le composant "Tags"
// pour afficher des balises.
// 11. `import Ratings from '../widgets/Ratings';` : Importe le composant "Ratings"
// pour afficher les évaluations.
// 12. `import Host from '../widgets/Host';` : Importe le composant "Host"
// pour afficher les informations de l'hôte.

// Dans le composant "SheetApartment", nous utilisons la fonction "useParams"
//pour récupérer l'identifiant du logement via l'URL. Ensuite, nous utilisons
// la fonction "find" pour trouver le logement correspondant dans la liste "ApartmentsList".

// Si le logement n'est pas trouvé, nous affichons le composant "Error". Sinon,
// nous affichons les détails du logement en utilisant les composants importés tels que "Header",
// "Gallery", "Tags", "Host", "Ratings", "Collapse" et "Footer".

// Enfin, le composant "SheetApartment" est exporté pour être utilisé dans d'autres parties
// de l'application.
