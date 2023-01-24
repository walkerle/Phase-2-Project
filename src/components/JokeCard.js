import React, { useState } from 'react';

function JokeCard({setup, delivery, id}) {
  const [fav, setFav] = useState([false]);
  const [idEdit, setIdEdit] = useState("")

  function handleFav(e) {
    console.log(e.target);
    setFav(true)
    console.log(fav)
  }

  function handleEdit(e) {
    console.log(e.target);
    setIdEdit(id);
    console.log(idEdit);
  }


  return( 
    <div>
      JokeCard
      <div>
        <p>{setup}</p>
        <p>{delivery}</p>
        <button onClick={handleFav}>AddToFavorites</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default JokeCard;