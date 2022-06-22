import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import * as Tone from 'tone';
import './App.css';
import Welcome from './components/welcome';
import Board from './components/board';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [resolution, setResolution] = useState(10000);
  const [faderArray, setArray] = useState(new Array(16));

  const handleChange = (async (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoggedIn(!loggedIn)
    event.currentTarget.innerHTML = loggedIn ? "log in" : "log out";

    await Tone.start();
  })

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
          <div className="options">
            <button onClick={handleChange}>log in</button>
          </div>
        <div>
          <div className='container'>
            <>
            {
              loggedIn && 
              <Board handleChange={setLoggedIn} loggedIn={loggedIn}  />
            }
            </>

          </div>
        </div>
      </header>
    </div>
  );
}



export default App;