import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import './App.css';
import Welcome from './components/welcome';
import Board from './components/board';

function App() {
  let [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {
            (loggedIn)
            ? <Board /> 

            : <div><Welcome /><button onClick={(e) => {
                setLoggedIn(!loggedIn)
            }}>log in</button></div>
          }

        </div>
      </header>
    </div>
  );
}



export default App;
