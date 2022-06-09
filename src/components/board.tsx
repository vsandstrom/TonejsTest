import React from 'react';
import Fader from './fader';

interface BoardProps {
    // socket: WebSocket;
    handleChange: React.Dispatch<React.SetStateAction<boolean>>;
    loggedIn: boolean;
    valueArray: Array<number>; 
}

interface BoardState {
    faderArray: Array<any>;
    // ws: WebSocket;
}

class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            // WEBSOCKET ARRAY maybe?   
            faderArray: [...Array(16)].map((obj, i) => {
                return (this.renderFader(i))
            }),
            // valueArray: Array(16),
            // ws: props.socket,
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.id + ': ' + event.target.value);
        //this.state.ws.send(JSON.stringify((event.target.id), event.currentTarget.value);
    }

    createBoard = () => {
        this.setState({
            faderArray: this.state.faderArray.map((obj, i) => {
                return (this.renderFader(i))
            })
        })
    }

    renderFader = (i: number) => {
        return (
            <Fader key={(i).toString()} faderId={'fader' + (i).toString()} faderValue={(1000 / 15) * i} handleChange={this.handleChange}/>
        )

    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.state.faderArray}
                </div>
            </div>
        )
    }
}

export default Board