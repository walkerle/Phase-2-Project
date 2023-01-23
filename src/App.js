import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <strong>Phase 2 Project</strong>
      <div>
        <NavBar />
        <Header />
      </div>
    </div>
  );
}

export default App;