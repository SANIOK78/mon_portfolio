import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';


function App() {

  return (
       
    <Routes basename={process.env.PUBLIC_URL} >

      <Route exact path='/' element={ <Home /> } />
      <Route exact path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/competences' element={ <Competences /> } />
      <Route path='/portfolio' element={ <Portfolio /> } />
      <Route path='*' element={ <NotFound /> } /> 

    </Routes>
    
  );
}

export default App;
