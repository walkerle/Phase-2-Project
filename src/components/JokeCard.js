import React/*, { useState }*/ from 'react';

function JokeCard({ joke, onHeartClick }) {
  
  // const [idEdit, setIdEdit] = useState("")

  function handleHeartClick() {
    onHeartClick(joke);
  }

  function handleEdit() {
    console.log('handleEdit clicked');
    // setIdEdit(id);
    // console.log(idEdit);
  }

  return( 
    <div>
      JokeCard
      <div>
          <p>{joke.setup}</p>
          <p>{joke.delivery}</p>
        {/* {(type === "twopart" ? (<span><p>{joke.setup}</p><p>{joke.delivery}</p></span>) : <p>{joke.joke}</p> )} */}
        <button onClick={handleHeartClick}>♡</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default JokeCard;

// ♡
// ♥