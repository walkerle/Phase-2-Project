import React from 'react';
import JokeCard from './JokeCard';

const favUrl = "http://localhost:3001/favjokes";

function JokesList({ jokes, fav, setFav }) {

  function addFav(jokeObj) {

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jokeObj)
    }

    fetch(favUrl, config)
    .then(res => res.json())
    .then(jokeObj => setFav([...fav, jokeObj]));
  }

  const jokesList = jokes.map(joke => {
    return (
      <JokeCard key={joke.id} joke={joke} onHeartClick={addFav} />
    )
  })

  return (
    <div>
      <h2><strong>Jokes</strong></h2>
      <div>
        {jokesList}
      </div>
    </div>
  );
}

export default JokesList;