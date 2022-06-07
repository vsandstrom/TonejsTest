import React, { ReactEventHandler } from 'react';
import { BooleanLiteral } from 'typescript';

interface WelcomeProps {
}

interface WelcomeState {

}

class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    handleInput(event: ReactEventHandler<HTMLInputElement>) {

    }
    render() {
        return (
            <div className="welcomeContainer">
                <h1>OSC Web Interface</h1>
            </div>
        )
    }
}

export default Welcome;