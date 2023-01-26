import React from 'react';
import JokeCard from './JokeCard';

const favUrl = "http://localhost:3001/favjokes";

function FavoritesList({ fav, onRemoveFav, onEditClick }) {

  function removeFav(jokeObj) {
    onRemoveFav(jokeObj);

    const config = {
      method: "DELETE"
    }

    fetch(`${favUrl}/${jokeObj.id}`, config)
  }

  const jokesList = fav.map(joke => {
    return (
      <JokeCard key={joke.id} joke={joke} onHeartClick={removeFav} onEditClick={onEditClick} fav={fav} />
    )
  })

  return (
    <div>
      <h2><strong>Favorite Jokes List</strong></h2>
      <div className="JokesListParent">
        {jokesList}
      </div><br />
    </div>
  );
}

export default FavoritesList;