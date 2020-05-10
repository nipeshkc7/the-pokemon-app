import React from 'react';
import '../style/App.css';
import Pokeball from '../assets/pokeball.png'
import Button from '@material-ui/core/Button';

const StartBox = ({ appState, actions }) => {
    return (
        <div className="App-header">
            <img src={Pokeball} className="App-logo" alt="logo" />
            <h2>
                <b>🚀🚀 Welcome to the Pokemon App</b>
            </h2>
            <Button variant="contained" size="large" color="secondary"
            className="Start-button"
            onClick={() => {
                actions.startApp()
            }}>
                <b>Start</b>
            </Button>
            <br />
            <small className="My-Name">By <a href="https://arpankc.com" target="_blank">Arpan KC</a></small>
        </div>
    )
}

export default StartBox;