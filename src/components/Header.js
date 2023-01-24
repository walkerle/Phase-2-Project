import React, { useEffect, useState } from 'react';
import JokesList from './JokesList';
import FavoritesList from './FavoritesList';
import Form from './Form';

const baseUrl = "https://v2.jokeapi.dev/joke/Any?amount=6" // no safe-mode option?

function Header() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch(baseUrl)
    .then((res) => res.json())
    .then(jokeObj => setJokes(jokeObj.jokes))
  }, [])
  
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