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
          <b>🚀 Welcome to the Pokemon App🙌</b>
        </h2>
        <a
          className="App-link"
          rel="noopener noreferrer"
          href="#"
        >
          <br />
          <b onClick={e => dispatch(startApp('STARTED'))}>
            Start
        </b>
        </a>
      </header>
    </div>
  )
}

export default connect()(MainBox);
