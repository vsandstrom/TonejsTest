import React from 'react';
import Slider from './slider';

//import Slider from './sliderFunc';

interface BoardProps {
    // socket: WebSocket;
}

interface BoardState {
    sliderArray: Array<any>;
    valueArray: Array<number>; 
    // ws: WebSocket;


}

class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            // WEBSOCKET ARRAY maybe?   
            sliderArray: [...Array(16)].map((obj, i) => {
                return (this.renderSlider(i))
            }),
            valueArray: Array(16),
            // ws: props.socket,
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.id + ': ' + event.target.value);
        //this.state.ws.send(JSON.stringify((event.target.id), event.currentTarget.value);
    }

    createBoard = () => {
        this.setState({
            sliderArray: this.state.sliderArray.map((obj, i) => {
                return (this.renderSlider(i))
            })
        })
    }

    renderSlider = (i: number) => {
        return (
            <Slider key={(i).toString()} sliderId={"fader" + (i).toString()} sliderValue={(1000 / 15) * i} handleChange={this.handleChange}/>
        )

    }

    render() {
        return this.state.sliderArray
            // ([...Array(16)]).map((obj, i) => {
            // <Slider key={(i).toString()} sliderValue={(1000 / 15) * i} handleChange={this.handleChange}/>
            // })
        
    }
}

export default Board