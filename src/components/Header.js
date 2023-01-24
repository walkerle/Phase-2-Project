import React, { useEffect, useState } from 'react';
import JokesList from './JokesList';
import FavoritesList from './FavoritesList';
import Form from './Form';

// const baseUrl = "https://v2.jokeapi.dev/joke/Any?amount=6" // no safe-mode option, twopart and single
const baseUrl = "https://v2.jokeapi.dev/joke/Any?type=twopart&amount=6" // twopart only

function Header({ cycleCount }) {

  const [jokes, setJokes] = useState([])
  const [fav, setFav] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
    .then((res) => res.json())
    .then(jokeObj => setJokes(jokeObj.jokes))
  }, [cycleCount])

  function onDelete(e) {
    console.log('onDelete');
  }
  
  return (
    <div>
      Header
      <div>
        <JokesList jokes={jokes} fav={fav} setFav={setFav} onDelete={onDelete} />
        <FavoritesList fav={fav} setFav={setFav} onDelete={onDelete} />
        <Form />
      </div>
    </div>
  );
}

export default Header;