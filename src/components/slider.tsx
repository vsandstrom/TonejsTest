import React from 'react'
import { render, screen } from '@testing-library/react';

// need to specify what types the props passed to a class has, and pass them as the template for React.Component.
interface sliderProps {
    sliderValue: number;
    sliderId: string;
    key:string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
  }

// it is the same for states.
interface sliderState {
    value: number;
}

// React.Component takes both props and state as template input:
class Slider extends React.Component<sliderProps, sliderState> {
    constructor(props: sliderProps){
        super(props);

        this.state = {
            value: 0,
        }
    }

    // return the React Node here: 
    render() {
        return (
            <div className="sliderDiv">
                <input className="fader" id={this.props.sliderId} type="range" onChange={(e) => this.props.handleChange(e)} defaultValue={(this.props.sliderValue)} min="0" max="1000"></input>
            </div>
        )
    }
}


export default Slider;