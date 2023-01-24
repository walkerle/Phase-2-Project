import React from 'react';

function JokeCard({ joke, onHeartClick, onEditClick }) {

  function handleHeartClick() {
    onHeartClick(joke);
  }

  function handleEdit() { // Stretch goal
    console.log('handleEdit clicked');
    onEditClick(joke);
  }

  return( 
    <div>
      JokeCard
      <div>
          <p>{joke.setup}</p>
          <p>{joke.delivery}</p>
        <button onClick={handleHeartClick}>♡</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default JokeCard;

// ♡ - Stretch goal
// ♥ - Stretch goal