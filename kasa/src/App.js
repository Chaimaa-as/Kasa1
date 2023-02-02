
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './component/pages/About';
import Home from './component/pages/Home';
import SheetApartment from './component/pages/SheetApartment';
import Error from './component/pages/Error';

function App() {
  return (
    <BrowserRouter>
        <Routes>
         {/* chemins d'accès pour les différentes pages*/}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/logement/:id' element={<SheetApartment/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}
export default App;
