import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Board from './board';

// const socket = new WebSocket("localhost");
const valueArray = Array(16);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Board /> 
        </div>
      </header>
    </div>
  );
}

export default App;
