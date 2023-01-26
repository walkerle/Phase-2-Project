import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div className="NavBar">
      <NavLink className="NavBarChild" exact to="/">
        Home
      </NavLink>
      <NavLink className="NavBarChild" to="/jokeslist">
        Jokes List
      </NavLink>
      <NavLink className="NavBarChild" exact to="/favslist">
        Favorite Jokes List
      </NavLink>
      <NavLink className="NavBarChild" to="/jokeform">
        New Joke Form
      </NavLink>
      {/* <button>Dark Mode</button> */}
    </div>
  );
}

export default NavBar;