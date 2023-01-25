import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <h1><strong>The Jokesters</strong></h1>
      <div>
        <NavBar />
        <Header />
      </div>
    </div>
  );
}

export default App;