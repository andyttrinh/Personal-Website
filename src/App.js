import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
      </Router>
    </div>
  );
}

export default App;
