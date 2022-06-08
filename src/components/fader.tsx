import React from 'react'
import { render, screen } from '@testing-library/react';

// need to specify what types the props passed to a class has, and pass them as the template for React.Component.
interface faderProps {
    faderValue: number;
    faderId: string;
    key:string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
  }

// it is the same for states.
interface faderState {
    value: number;
}

// React.Component takes both props and state as template input:
class Fader extends React.Component<faderProps, faderState> {
    constructor(props: faderProps){
        super(props);

        this.state = {
            value: 0,
        }
    }

    // return the React Node here: 
    render() {
        return (
            <div className="faderDiv">
                <input className="fader" id={this.props.faderId} type="range" onChange={(e) => this.props.handleChange(e)} defaultValue={(this.props.faderValue)} min="0" max="1000"></input>
            </div>
        )
    }
}


export default Fader;