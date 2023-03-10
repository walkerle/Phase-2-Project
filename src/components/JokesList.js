import React from 'react';
import JokeCard from './JokeCard';

const favUrl = "http://localhost:3001/favjokes";

function JokesList({ jokes, fav, setFav, setCycleCount, onEditClick }) {

  function addFav(jokeObj) {

    const postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jokeObj)
    }

    fetch(favUrl, postConfig)
    .then(res => res.json())
    .then(jokeObj => setFav([...fav, jokeObj]))
    .catch(error => alert("Joke has already been added to your Favorite Jokes List!"))
  }

  function handleCycle() {
    setCycleCount(value => value + 1)
  }

  const jokesList = jokes.map(joke => {
    return (
      <JokeCard  key={joke.id} joke={joke} onHeartClick={addFav} onEditClick={onEditClick} fav={fav} />
    )
  })

  return (
    <div>
      <h2>Jokes List</h2>
      <button className="cycleJokes" onClick={handleCycle}>Cycle Jokes</button><br /><br />
      <div className="JokesListParent">
        {jokesList}
      </div><br />
    </div>
  );
}

export default JokesList;