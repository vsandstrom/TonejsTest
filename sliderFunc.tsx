import React, { FunctionComponent } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';

interface sliderProps {
    sliderId: number,
    sliderValue: number,
    handleChange: React.ChangeEventHandler,
    }


function Slider(props: sliderProps){
    return (
        <input 
        className="fader" 
        type="range" 
        id={"slider" + props.sliderId.toString()} 
        onChange={(e) => props.handleChange(e)} 
        defaultValue={props.sliderValue} 
        min="0" 
        max="1000"></input>
    )
}

export default Slider; 