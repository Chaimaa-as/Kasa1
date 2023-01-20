import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './component/pages/About';
import Home from './component/pages/Home';
import Apartments from './component/pages/Apartments';

function App() {
  return (
    <BrowserRouter>
        <Routes>
         {/* chemin d'accès */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>

          {/* path=* fonctionne si jamais l'url n'aboutit à aucune page existante (au lieu de mettre erreur on renvoir à l'accueil (ATTENTION voir spec ils veulent peut etre une page 404)) */}
          <Route path='*' element={<Home/>}/>
          <Route path='/logements' element={<Apartments/>}/>


        </Routes>
    </BrowserRouter>
    
  );
}
export default App;
