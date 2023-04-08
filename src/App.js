
import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './Layout/NavBar';
import Home from './Layout/Home';
import Holiday from './Layout/Pages/Holiday';
import Gameday from './Layout/Pages/Gameday';
import Accent from './Layout/Pages/Accent';
import Contact from './Layout/Pages/Contact';
import Footer from './Layout/Footer';
import Quote from './Layout/Pages/Quote';
import Security from './Layout/Pages/Security';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Holiday" element={<Holiday />}/>
          <Route path="/Security" element={<Security />}/>
          <Route path="/Gameday" element={<Gameday />}/>
          <Route path="/Accent" element={<Accent />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Quote" element={<Quote />}/>
        </Routes>
      <Footer />  
    </div>
  );
}

export default App;
