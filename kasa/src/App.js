import './scss/styles.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './components/pages/About';
import Home from './components/pages/Home';
import SheetApartment from './components/pages/SheetApartment';
import Error from './components/pages/Error';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/logement/:id' element={<SheetApartment/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;