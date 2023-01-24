import React/*, { useState }*/ from 'react';

function JokeCard({ joke, fav, setFav, onDelete }) {
  
  // const [idEdit, setIdEdit] = useState("")

  function handleFav() {
    console.log('handleFav clicked');
    setFav([...fav, joke])
  }

  function handleEdit() {
    console.log('handleEdit clicked');
    // setIdEdit(id);
    // console.log(idEdit);
  }

  function handleDelete(e){
    console.log('handleDelete clicked');
    onDelete(e.target);
  }

  // const deleteBtn = (fav.forEach( favJoke => favJoke.id.includes(joke.id) ) ? (<button onClick={handleDelete}>X</button>) : "" )

  // console.log(deleteBtn);

  // Need a JokeCard AND FavoriteCard??

  return( 
    <div>
      JokeCard
      <div>
          <p>{joke.setup}</p>
          <p>{joke.delivery}</p>
        {/* {(type === "twopart" ? (<span><p>{setup}</p><p>{delivery}</p></span>) : <p>{joke}</p> )} */}
        <button onClick={handleFav}>♡</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>X</button>
      </div>
    </div>
  )
}

export default JokeCard;

// ♡
// ♥