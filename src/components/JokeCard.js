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
      <button className='JokeCardEditButton' onClick={handleEdit}>Edit</button>
    </Link>
  )

  return( 
    <div className='JokesListChild'>
      <h3>Joke Card</h3>
      <div className='JokeCardParent'>
        <p className="JokeCardChild">{joke.setup}</p>
        <p className="JokeCardChild">{joke.delivery}</p>
        <p>
          <button className='JokeCardHeartButton' onClick={handleHeartClick}>♡</button>
          {(editButtonLogic ? editButton : "")}
        </p>
      </div>
    </div>
  )
}

export default JokeCard;

// ♡ - Stretch goal
// ♥ - Stretch goal