import React, { useState, useRef } from 'react';
// import rick from '../other/how-to-rick-roll-someone.mp3';
// import rick from '../other/never-gonna-give-you-up.mp3';
import rick from '../other/rick-astley-never-gonna-coffin-you-up.mp3';

function Home() {

  const [playing, setPlaying] = useState(false);

  const audio = useRef(new Audio(rick))

  function ricky() {
    if(!playing) {
      audio.current.play();
      audio.current.loop = true;
    } else {
      audio.current.pause();
    }
    setPlaying(!playing);
  }

  return (
    <div className="pagenoteParent"><br />
        <h2 className="pagenoteChild">Welcome to The Jokesters Page!</h2>
        <p className="pagenoteChild">
          You have entered a place where puns will be made, cringy faces might be expressed, and feelings may be hurt.  Proceed at your own risk!  The following jokes do not reflect the opinions or views of the page creators.<br />
        </p>
        <p className="pagenoteChildWarning">
          <strong onClick={ricky}>
            WARNING:
          </strong><br />
          <strong>Reader Discretion is Advised</strong>
        </p><br />
      </div>
  )
}

export default Home;