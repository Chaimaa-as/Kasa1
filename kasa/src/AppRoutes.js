import React from "react";

// Importe les composants nécessaires de la bibliothèque "react-router-dom" pour gérer la navigation entre les pages.
import { Route, Routes } from "react-router-dom";

// Les quatre lignes suivantes importent les composants des pages individuelles de l'application :
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import SheetApartment from "./components/pages/SheetApartment";
import Error from "./components/pages/Error";

// `AppRoutes` est un composant qui contient les différentes routes (ou chemins) de l'application.
const AppRoutes = () => {
  return (
    <Routes>
      {/* Mise en place de toutes les pages avec le routeur.
        - Chaque `Route` définit un chemin spécifique et le composant à afficher lorsque ce chemin est visité. 
    */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<SheetApartment />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRoutes;
