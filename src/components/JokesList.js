import React from 'react';
import JokeCard from './JokeCard';

function JokesList({ jokes }) {

  const jokesList = jokes.map(joke => {
    return (
      <JokeCard key={joke.id} {...joke} />
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