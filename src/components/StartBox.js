import React from "react";
import "../style/App.css";
import Pokeball from "../assets/pokeball.png";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as allActions from "../actions";

const StartBox = () => {
  const dispatch = useDispatch();
  return (
    <div className="App-header">
      <img src={Pokeball} className="App-logo" alt="logo" />
      <h2>
        <b>
          <span role="img" aria-label="emoji">
            🚀🚀
          </span>{" "}
          Welcome to the Pokemon App
        </b>
      </h2>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        className="Start-button"
        onClick={() => {
          dispatch(allActions.startApp());
        }}
      >
        <b>Start</b>
      </Button>
      <br />
      <small className="My-Name">
        By{" "}
        <a href="https://arpankc.com" target="_blank" rel="noopener noreferrer">
          Arpan KC
        </a>
      </small>
    </div>
  );
};

export default StartBox;
