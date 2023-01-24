import React from 'react';

function NavBar({ setCycleCount }) {

  function handleCycle() {
    console.log('handleCycle clicked');
    setCycleCount(value => value + 1)
  }

  return (
    <div>
      NavBar
      <div>
        <button>Jokes List</button>
        <button>Favorites</button>
        <button>Dark Mode</button>
      </div>
      <div>
        <button>New Joke Form</button>
        <button onClick={handleCycle}>Cycle Jokes</button>
      </div>
    </div>
  );
}

export default NavBar;