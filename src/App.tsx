import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import * as Tone from 'tone';
import './App.css';
import Welcome from './components/welcome';
import Board from './components/board';
import { closeSync } from 'fs';

const vol = new Tone.Volume(-18).toDestination()
const reverb = new Tone.JCReverb(0.8).chain(vol);
const plucky0 = new Tone.AMSynth().chain(reverb);
const plucky1 = new Tone.AMSynth().chain(reverb);
const plucky2 = new Tone.AMSynth().chain(reverb);
const plucky3 = new Tone.AMSynth().chain(reverb);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [resolution, setResolution] = useState(10000);
  const [faderArray, setArray] = useState(new Array(16));

  const handleChange = (async (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoggedIn(!loggedIn)
    event.currentTarget.innerHTML = loggedIn ? "log in" : "log out";

    await Tone.start();

    

    let now = Tone.now();
    const fund = 300;
    if (!loggedIn) {
      //synth.triggerAttackRelease("C4", "8n");

      plucky0.harmonicity.value = 3/2*2;
      plucky1.harmonicity.value = 5/3;
      plucky2.harmonicity.value = 3/2*2;
      plucky3.harmonicity.value = 5/3;

      plucky0.triggerAttackRelease(0.25 * fund, 2, now); 
      plucky1.triggerAttackRelease(3/5 * fund, 2, now + 0.12); 
      plucky2.triggerAttackRelease(2/6 * fund, 2, now + 0.2); 
      plucky3.triggerAttackRelease(9/8 * fund, 2, now + 0.24);

      plucky0.triggerAttackRelease(1.5/2 * fund, 2, now + 2 +1 ); 
      plucky1.triggerAttackRelease(2.5/2 * fund, 2, now + 2.2 +1); 
      plucky2.triggerAttackRelease(2.5/3 * fund, 2, now + 2.12 +1); 
      plucky3.triggerAttackRelease(15/8 * fund, 2, now + 2.24 +1);
      
    } else {
      console.log("here");
      plucky0.disconnect();
      plucky1.disconnect();
      plucky2.disconnect();
      plucky3.disconnect();


      

    }
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
            {
              loggedIn && 
              <Board handleChange={setLoggedIn} loggedIn={loggedIn} />
            }
          </div>
        </div>
      </header>
    </div>
  );
}



export default App;