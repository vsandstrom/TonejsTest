import React from 'react';
import * as Tone from 'tone';

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
                <label className="label" htmlFor={this.props.faderId}>
                    {this.props.faderId}: {((1 / 1000) * this.state.value).toFixed(3)} 
                </label>
                <input 
                    className="fader" 
                    id={this.props.faderId} 
                    type="range" 
                    onChange={(e) => {
                        this.props.handleChange(e);
                        this.setState({value: parseInt(e.currentTarget.value)})
                    }} 
                    defaultValue={(this.props.faderValue)} 
                    min="0" 
                    max="1000"
                >
                </input>
            </div>
        )
    }
}


export default Fader;