// Importe les styles CSS pour ce composant.
import "../../scss/styles.scss";
// Importe le composant "Error" qui sera utilisé pour afficher une erreur si le logement n'est pas trouvé.
import Error from "./Error";
// Importe la bibliothèque React pour créer le composant.
import React from "react";
//Importe la fonction "useParams" de la bibliothèque "react-router-dom" pour accéder aux paramètres de l'URL.
import { useParams } from "react-router-dom";
import ApartmentsList from "../../logement.json";

// Les autres lignes importent des composants personnalisés
import Header from "../layout/Header";
import Gallery from "../widgets/Gallery";
import Collapse from "../widgets/Collapse";
import Tags from "../widgets/Tags";
import Ratings from "../widgets/Ratings";
import Host from "../widgets/Host";
import Footer from "../layout/Footer";

const SheetApartment = () => {
  // nous utilisons la fonction "useParams" pour récupérer l'identifiant du logement via l'URL.
  const { id } = useParams();
  // Ensuite, nous utilisons la fonction "find" pour trouver le logement correspondant dans la liste "ApartmentsList".
  const apartment = ApartmentsList.find((item) => item.id === id);
  // Si le logement n'est pas trouvé, nous affichons le composant "Error".
  // Sinon, nous affichons les détails du logement en utilisant les composants importés tels que "Header", "Gallery", "Tags", "Host", "Ratings", "Collapse" et "Footer".
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

// le composant "SheetApartment" est exporté pour être utilisé dans d'autres parties de l'application.
export default SheetApartment;
