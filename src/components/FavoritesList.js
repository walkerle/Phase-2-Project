import React from 'react';
import JokeCard from './JokeCard';

function FavoritesList({ fav, setFav, onDelete }) {

  const jokesList = fav.map(joke => {
    return (
      <JokeCard key={joke.id} joke={joke} fav={fav} setFav={setFav} onDelete={onDelete} />
    )
  })

  return (
    <div>
      FavoritesList
      <div>
        {jokesList}
        <button>Delete</button>
      </div>
    </div>
  );
}

export default FavoritesList;