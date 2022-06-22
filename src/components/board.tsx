import React from 'react';
import Fader from './fader';
import * as Tone from 'tone';
import { AMSynth } from 'tone';

const vol = new Tone.Volume(0).toDestination()
const reverb = new Tone.Reverb(16).chain(vol);

const plucky0 = new Tone.AMSynth().chain(reverb);
const plucky1 = new Tone.AMSynth().chain(reverb);
const plucky2 = new Tone.AMSynth().chain(reverb);
const plucky3 = new Tone.AMSynth().chain(reverb);

interface BoardProps {
    // socket: WebSocket;
    handleChange: React.Dispatch<React.SetStateAction<boolean>>;
    loggedIn: boolean;
}

interface BoardState {
    faderArray: Array<any>;
    fund: number;
    valueArray: Array<any>;
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
            fund: 300,
            valueArray: Array(16),
            // ws: props.socket,
        }
    }

    onRender = ()  => {
        const now = Tone.now();

        // plucky.forEach(synth => synth.chain(reverb));
        plucky0.chain(reverb);
        plucky1.chain(reverb);
        plucky2.chain(reverb);
        plucky3.chain(reverb);
        
        let three = 3;
        
        const harm = [3/2*2, 5/3, 3/2*2, 5/3];
        const arp = [0, 0.12, 0.2, 0.24];
        // plucky.set({harmonicity: 3/2*2});
        // for (let i = 0; plucky.length; i++) {
        //     plucky[i].harmonicity.value = harm[i];
        // };
        plucky0.harmonicity.value = 3/2*2;
        plucky1.harmonicity.value = 5/3;
        plucky2.harmonicity.value = 3/2*2;
        plucky3.harmonicity.value = 5/3;

        if (this.props.loggedIn === true) {

            const loop = new Tone.Loop((time) => {
                console.log(time);
            
                plucky0.triggerAttackRelease(0.25 * this.state.fund, 2, time); 
                plucky1.triggerAttackRelease(3/5 * this.state.fund, 2, (time + 0.12)); 
                plucky2.triggerAttackRelease(2/6 * this.state.fund, 2, (time + 0.2)); 
                plucky3.triggerAttackRelease(9/8 * this.state.fund, 2, (time + 0.24));

                plucky0.triggerAttackRelease(1.5/2 * this.state.fund, 2, (time + 3)); 
                plucky1.triggerAttackRelease(2.5/2 * this.state.fund, 2, (time + 3.2)); 
                plucky2.triggerAttackRelease(2.5/3 * this.state.fund, 2, (time + 3.12)); 
                plucky3.triggerAttackRelease(15/8 * this.state.fund, 2, (time + 3.24));

                plucky0.triggerAttackRelease(1.5/2 * this.state.fund * 5/4, 2, (time + 6)); 
                plucky1.triggerAttackRelease(2.5/2 * this.state.fund* 5/4, 2, (time + 6.2)); 
                plucky2.triggerAttackRelease(2.5/3 * this.state.fund* 5/4, 2, (time + 6.12)); 
                plucky3.triggerAttackRelease(15/8 * this.state.fund* 5/4, 2, (time + 6.24));

                plucky0.triggerAttackRelease(1.5/2 * this.state.fund * 3/4, 2, (time + 9)); 
                plucky1.triggerAttackRelease(2.5/2 * this.state.fund * 3/4, 2, (time + 9.2)); 
                plucky2.triggerAttackRelease(2.5/3 * this.state.fund * 3/4, 2, (time + 9.12)); 
                plucky3.triggerAttackRelease(15/8 * this.state.fund * 3/4, 2, (time + 9.24));

            }, 6).start(0);

            Tone.Transport.start(now);
            
        } else {

            Tone.Transport.stop();
            // console.log("here");
            // plucky0.disconnect();
            // plucky1.disconnect();
            // plucky2.disconnect();
            // plucky3.disconnect();

            // Tone.start();
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const faderID: number = parseInt(event.target.id);
        const eVal = parseInt(event.currentTarget.value);
        if (faderID === 0) {
            let val: number = (-32 * (-1 * (eVal/1000))) - 32;

            console.log(val);

            plucky0.set({volume: val});
        } else if (faderID === 1) {
            let val: number = (-32 * (-1 * (eVal/1000))) - 32;

            console.log(val);

            plucky1.set({volume: val});
        } else if (faderID === 2) {
            let val: number = (-32 * (-1 * (eVal/1000))) - 32;

            console.log(val);

            plucky2.set({volume: val});
        } else if (faderID === 3) {
            let val: number = (-32 * (-1 * (eVal/1000))) - 32;

            console.log(val);

            plucky3.set({volume: val});
        } else if (faderID === 4) {
            let val = 1 * (1000 / eVal);

            plucky0.set({harmonicity: val});

        } else if (faderID === 5) {
            let val = 1 * (1000 / eVal);

            plucky1.set({harmonicity: val});

        
        } else if (faderID === 6) {
            let val = 1 * (1000 / eVal);

            plucky2.set({harmonicity: val});

        } else if (faderID === 7) {
            let val = 1 * (1000 / eVal);

            plucky3.set({harmonicity: val});

        }


        // const faderID: number = parseInt(event.target.id);
        // console.log("fader" + event.target.id + ': ' + event.target.value);
        // this.state.valueArray[faderID] = event.target.value;


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
            <Fader key={(i).toString()} faderId={(i).toString()} faderValue={(1000 / 15) * i} handleChange={this.handleChange}/>
        )

    }

    render() {
        return (
            <div>
                <div className="container">
                    <>{this.state.faderArray}</>
                    <>{this.onRender()}</>
                </div>
            </div>
        )
    }
}

export default Board