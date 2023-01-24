import React from 'react';
import JokeCard from './JokeCard';

function JokesList({ jokes, fav, setFav, onDelete }) {

  const jokesList = jokes.map(joke => {
    return (
      <JokeCard key={joke.id} joke={joke} fav={fav} setFav={setFav} onDelete={onDelete} />
    )
  })

  return (
    <div>
      Jokes
      <div>
        {jokesList}
      </div>
    </div>
  );
}

export default JokesList;