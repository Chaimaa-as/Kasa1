// 1. Importe un fichier de styles SCSS pour être utilisé
// dans l'application.
import "./scss/styles.scss";

// 2. Importe le composant nécessaire de la bibliothèque "react-router-dom"
// pour gérer la navigation entre les pages.
import { BrowserRouter } from "react-router-dom";

// 3. Importe le composant AppRoutes : là où on a centralisé toutes les routes
// (pour meilleure maintenance par la suite)
import AppRoutes from "./AppRoutes";

// 4. Définit un composant fonctionnel appelé "App",
// qui est le composant principal de l'application.
function App() {
  return (
    <>
      {/* À l'intérieur du composant App, nous avons la structure suivante :
    - `BrowserRouter` est un composant qui englobe les routes de l'application. */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

// Exporte le composant afin qu'il puisse être utilisé
export default App;
