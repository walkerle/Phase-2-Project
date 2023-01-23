import React from 'react';

function JokeCard({setup, delivery}) {
  return( 
    <div>
      JokeCard
      <div>
        <p>{setup}</p>
        <p>{delivery}</p>
      </div>
    </div>
  )
}

export default JokeCard;