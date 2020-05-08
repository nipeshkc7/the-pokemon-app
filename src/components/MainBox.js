import React from 'react';
import { connect } from 'react-redux'
import '../style/App.css';
import { startApp } from '../actions';
import Pokeball from '../assets/pokeball.png'

const MainBox = ({ dispatch }) => {
  return (
    <div className="Start">
      <header className="App-header">
        <img src={Pokeball} className="App-logo" alt="logo" />
        <h2>
          <b>🚀🚀 Welcome to the Pokemon App</b>
        </h2>
        <a
          className="App-link"
          rel="noopener noreferrer"
          href="#"
        >
          <b onClick={e => {
            alert('Working on it, geez calm down buddy');
            return dispatch(startApp('STARTED'))
          }
          }>
            Start
        </b>
        </a>
        <br />
        <small className="My-Name">By <a href="https://arpankc.com" target="_blank">Arpan KC</a></small>
      </header>
    </div>
  )
}

export default connect()(MainBox);
