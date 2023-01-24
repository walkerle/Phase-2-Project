import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {

  const [cycleCount, setCycleCount] = useState(0)

  return (
    <div className="App">
      <strong>Phase 2 Project</strong>
      <div>
        <NavBar setCycleCount={setCycleCount} />
        <Header cycleCount={cycleCount} />
      </div>
    </div>
  );
}

export default App;