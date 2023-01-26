import React from 'react';
import { Link } from 'react-router-dom';

function JokeCard({ joke, onHeartClick, onEditClick, fav }) {

  function handleHeartClick() {
    onHeartClick(joke);
  }

  function handleEdit() {
    onEditClick(joke);
  }

  const editButtonLogic = fav.some(favJoke => favJoke.id === joke.id)

  const editButton = (
    <Link to={`/favslist/${joke.id}/edit`}>
      <button onClick={handleEdit}>Edit</button>
    </Link>
  )

  return( 
    <div className='JokesListChild'>
      JokeCard
      <div>
        <p>{joke.setup}</p>
        <p>{joke.delivery}</p>
        <button onClick={handleHeartClick}>♡</button>
        {(editButtonLogic ? editButton : "")}
      </div>
    </div>
  )
}

export default JokeCard;

// ♡ - Stretch goal
// ♥ - Stretch goal