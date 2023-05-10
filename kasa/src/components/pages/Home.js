// Cette ligne importe un fichier de style SCSS (un langage de prétraitement CSS) pour appliquer des styles à l'application.
import "../../scss/styles.scss";

// importe la bibliothèque React pour pouvoir utiliser ses fonctionnalités.
import React from "react";
// Les autres lignes importent des composants personnalisés (Footer, Header, ApartmentsList et Banner)
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ApartmentsList from "../layout/ApartmentsList";
import Banner from "../layout/Banner";

// Cette partie définit un composant fonctionnel React appelé "Home" et l'exporte pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default function Home() {
  // À l'intérieur de la fonction Home, nous avons le code JSX suivant :
  return (
    <>
      <Header />
      <Banner showTxt={false} />
      <ApartmentsList />
      <Footer />
    </>
  );
}
