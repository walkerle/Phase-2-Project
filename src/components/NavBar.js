import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/jokeslist">
        Jokes List
      </NavLink>
      <NavLink to="/favslist">
        Favorites
      </NavLink>
      <NavLink to="/jokeform">
        New Joke Form
      </NavLink>
      <button>Dark Mode</button>
    </div>
  );
}

export default NavBar;