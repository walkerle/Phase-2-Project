import React from 'react';
import JokeCard from './JokeCard';

const favUrl = "http://localhost:3001/favjokes";

function FavoritesList({ fav, onRemoveFav }) {

  function removeFav(jokeObj) {
    onRemoveFav(jokeObj);

    const config = {
      method: "DELETE"
    }

    fetch(`${favUrl}/${jokeObj.id}`, config)
  }

  function onEditClick() {
    console.log('onEditClick');
  }

  const jokesList = fav.map(joke => {
    return (
      <JokeCard key={joke.id} joke={joke} onHeartClick={removeFav} onEditClick={onEditClick} />
    )
  })

  return (
    <div>
      <h2><strong>Favorite Jokes List</strong></h2>
      <div>
        {jokesList}
      </div>
    </div>
  );
}

export default FavoritesList;