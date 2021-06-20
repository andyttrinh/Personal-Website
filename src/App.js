import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <About />
      </Router>
    </div>
  );
}

export default App;
