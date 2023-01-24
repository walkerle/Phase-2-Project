import React from 'react';
import JokeCard from './JokeCard';

const favUrl = "http://localhost:3001/favjokes";

function JokesList({ jokes, fav, setFav, setCycleCount }) {

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

  function handleCycle() {
    setCycleCount(value => value + 1)
  }

  function onEditClick() {
    console.log('onEditClick');
  }

  const jokesList = jokes.map(joke => {
    return (
      <JokeCard key={joke.id} joke={joke} onHeartClick={addFav} onEditClick={onEditClick} />
    )
  })

  return (
    <div>
      <h2><strong>Jokes List</strong></h2>
      <div>
        <button onClick={handleCycle}>Cycle Jokes</button><br />
        {jokesList}
      </div>
    </div>
  );
}

export default JokesList;