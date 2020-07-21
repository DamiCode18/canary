import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '././Components/Home'
import RateAlert from './Components/RateAlert';
import RateHistory from './Components/RateHistory';
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <RateHistory/>
      <Home/>
      <RateAlert/>
    </div>
  );
}

export default App;
