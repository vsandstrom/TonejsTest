import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import './App.css';
import Welcome from './components/welcome';
import Board from './components/board';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [resolution, setResolution] = useState(10000);

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <div className="container">
          {
            (loggedIn)
            ? <Board />

            : <div><button onClick={(e) => {
                setLoggedIn(!loggedIn)
            }}>log in</button></div>
          }

        </div>
      </header>
    </div>
  );
}



export default App;
