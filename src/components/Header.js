import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import JokesList from './JokesList';
import FavoritesList from './FavoritesList';
import Form from './Form';

const baseUrl = "https://v2.jokeapi.dev/joke/Any?type=twopart&amount=6";
const favUrl = "http://localhost:3001/favjokes";

function Header() {

  const [jokes, setJokes] = useState([]) // Jokes List Array
  const [fav, setFav] = useState([]); // Favorites List Array
  const [cycleCount, setCycleCount] = useState(0) // cycle jokes

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
      <div>
        <Switch>
          <Route path="/jokeslist">
            <JokesList jokes={jokes} fav={fav} setFav={setFav} setCycleCount={setCycleCount} />
          </Route>
          <Route path="/favslist">
            <FavoritesList fav={fav} setFav={setFav} onRemoveFav={onRemoveFav} />
          </Route>
          <Route path="/jokeform">
            <Form setFav={setFav} fav={fav}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Header;