// Ce code est un fichier principal d'une application React utilisant React Router pour gérer
// la navigation entre les pages. Je vais expliquer chaque partie du code :

// 1. `import './scss/styles.scss';` : Importe un fichier de styles SCSS pour être utilisé
// dans l'application.
import "./scss/styles.scss";

// 2. `import {BrowserRouter, Route, Routes} from "react-router-dom"` :
// Importe les composants nécessaires de la bibliothèque "react-router-dom"
// pour gérer la navigation entre les pages.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 3. Les quatre lignes suivantes importent les composants des pages individuelles de
// l'application :
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import SheetApartment from "./components/pages/SheetApartment";
import Error from "./components/pages/Error";

function App() {
  // 4. `function App() { ... }` : Définit un composant fonctionnel appelé "App",
  // qui est le composant principal de l'application.
  return (
    <>
      {/* // 5. À l'intérieur du composant App, nous avons la structure suivante :
      //    - `BrowserRouter` est un composant qui englobe les routes de l'application.
      //    - `Routes` est un composant qui contient les différentes routes (ou chemins) 
      // de l'application.
      //    - Chaque `Route` définit un chemin spécifique et le composant à afficher lorsque
      // ce chemin est visité. Par exemple, `<Route path='/about' element={<About/>}/>`
      // signifie que lorsque l'utilisateur visite l'URL "/about", le composant "About" sera affiché. */}
      {/* Mise en place de toutes les pages avec le routeur. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<SheetApartment />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// 6. `export default App;` : Exporte le composant App afin qu'il puisse être utilisé
// dans d'autres parties de l'application.
export default App;
