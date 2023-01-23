import React, { useEffect, useState } from 'react';
import JokesList from './JokesList';
import FavoritesList from './FavoritesList';
import Form from './Form';

const baseUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"

function Header() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(jokeObj => setJokes([jokeObj])) // need to make as array of objs
  }, []) // "SHOULD" return only one joke

  return (
    <div>
      Header
      <div>
        <JokesList jokes={jokes} />
        <FavoritesList />
        <Form />
      </div>
    </div>
  );
}

export default Header;