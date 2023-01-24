import React, { useEffect, useState } from 'react';
import JokesList from './JokesList';
import FavoritesList from './FavoritesList';
import Form from './Form';

// const baseUrl = "https://v2.jokeapi.dev/joke/Any?amount=6" // no safe-mode option, twopart and single
const baseUrl = "https://v2.jokeapi.dev/joke/Any?type=twopart&amount=6"; // twopart only
const favUrl = "http://localhost:3001/favjokes";

function Header({ cycleCount }) {

  const [jokes, setJokes] = useState([]) // Jokes List Array
  const [fav, setFav] = useState([]); // Favorites List Array

  useEffect(() => {
    fetch(baseUrl)
    .then((res) => res.json())
    .then(jokeObj => setJokes(jokeObj.jokes))
  }, [cycleCount])

  useEffect(() => {
    fetch(favUrl)
    .then(res => res.json())
    .then(favObj => setFav(favObj))
  }, [])

  function onRemoveFav(jokeObj) {
    setFav(fav.filter(joke => {
      return joke.id !== jokeObj.id
    }))
  }
  
  return (
    <div>
      Header
      <div>
        <JokesList jokes={jokes} fav={fav} setFav={setFav} />
        <FavoritesList fav={fav} setFav={setFav} onRemoveFav={onRemoveFav} />
        <Form setFav={setFav} fav={fav}/>
      </div>
    </div>
  );
}

export default Header;