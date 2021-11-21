import React  from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import ListAll from './components/ListAll';
import MainSection from './components/MainSection';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar';


function App() {
  return (
  <>
  <BrowserRouter>
       <Navbar/>
       <Route exact path="/" component={Header}/>
       <Route exact path="/" component={MainSection}/>
       <Route path="/favourites" component={ListAll}/>
       <Route path="/details" component={MovieDetails}/>

  </BrowserRouter>
     
  </>
  );
}

export default App;
