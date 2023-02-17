import './scss/styles.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './components/pages/About';
import Home from './components/pages/Home';
import SheetApartment from './components/pages/SheetApartment';
import Error from './components/pages/Error';
import { createContext } from 'react';
import { useState } from 'react';


export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='colorMode' id={theme}>

        {/* <div className='switch'>
            <label>{theme === 'light' ? 'light Mode' : 'Dark Mode'}</label>
            <button onCick={toggleTheme} checked={theme === 'dark'}></button>
        </div> */}
        <BrowserRouter>
            <Routes>
            {/* chemins d'accès pour les différentes pages*/}
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/logement/:id' element={<SheetApartment/>}/>
              <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
    
  );
}
export default App;
