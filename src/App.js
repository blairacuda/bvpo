import React from 'react';
import './App.css';
import Navigation from './components/Navigation.js'

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">      
        <Navigation/>
      </div>
    </BrowserRouter>
  );
}

export default App;
