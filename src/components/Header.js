import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import JokesList from './JokesList';
import FavoritesList from './FavoritesList';
import Form from './Form';
import EditForm from './EditForm';

const baseUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode&blacklistFlags=nsfw,racist,sexist&type=twopart&amount=6";
const favUrl = "http://localhost:3001/favjokes";

function Header() {

  const [jokes, setJokes] = useState([]) // Jokes List Array
  const [fav, setFav] = useState([]); // Favorites List Array
  const [cycleCount, setCycleCount] = useState(0)
  const [editJoke, setEditJoke] = useState({});

  useEffect(() => {
    fetch(baseUrl)
    .then((res) => res.json())
    .then(jokeArr => setJokes(jokeArr.jokes))
  }, [cycleCount])

  useEffect(() => {
    fetch(favUrl)
    .then(res => res.json())
    .then(favArr => setFav(favArr))
  }, [])

  function onRemoveFav(jokeObj) {
    setFav(fav.filter(joke => {
      return joke.id !== jokeObj.id
    }))
  }

  function onEditClick(jokeObj) {
    setEditJoke(jokeObj)
  }
  
  function onEditFormSubmit(jokeObj) {
    const updatedJokes = fav.map( favJoke => {
      if(favJoke.id === jokeObj.id) {
        return jokeObj;
      } else {
        return favJoke;
      }
    })
    setFav(updatedJokes);
  }
  
  return (
    <div>
      <div>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jokeslist">
            <JokesList jokes={jokes} fav={fav} setFav={setFav} setCycleCount={setCycleCount} onEditClick={onEditClick} />
          </Route>
          <Route exact path="/favslist">
            <FavoritesList fav={fav} onRemoveFav={onRemoveFav} onEditClick={onEditClick} />
          </Route>
          <Route path="/jokeform">
            <Form setFav={setFav} fav={fav} />
          </Route>
          <Route path={`/favslist/:id/edit`}>
            <EditForm editJoke={editJoke} onEditFormSubmit={onEditFormSubmit} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Header;