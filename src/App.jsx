import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Components/homepage/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer'
import Services from './Components/Services/Services';
import Feature from './Components/Feature';
import Projectsection from './Components/Projectsection/Projectsection';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/skills' element={<Feature/>}/>
      <Route exact path='/projects' element={<Projectsection/>}/>
    </Routes>
    <Footer/>
     </>
  );
}

export default App;
