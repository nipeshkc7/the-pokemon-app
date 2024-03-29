import React from "react";
import "../style/App.css";
import StartBox from "../components/StartBox";
import * as types from "../constants/ActionTypes";
import Grid from "@material-ui/core/Grid";
import ChoosePokemon from "../components/ChoosePokemon";
import ChooseMoves from "../components/ChooseMoves";
import TrainPokemon from "../components/TrainPokemon";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import PokemonFullView from "../components/PokemonFullView";

const MainBox = ({ appState, actions }) => {
  switch (appState) {
    case types.NOT_YET_STARTED:
      return (
        <div className="Start">
          <StartBox></StartBox>
        </div>
      );
    case "PICKING_POKEMON":
    case "PICKING_MOVES":
    case "TRAINING_POKEMON":
    case "END":
      return (
        <React.Fragment>
          <CssBaseline />
          <Container fixed className="App-box">
            <PokemonFullView id="stepOne"></PokemonFullView>
            <Grid container spacing={3}>
              <Grid item sm={4} xs={12}>
                <ChoosePokemon></ChoosePokemon>
              </Grid>
              <Grid item sm={4} xs={12}>
                <ChooseMoves id="stepTwo"></ChooseMoves>
              </Grid>
              <Grid item sm={4} xs={12}>
                <TrainPokemon id="stepThree"></TrainPokemon>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      );
    default:
      return (
        <div className="Start">
          <StartBox></StartBox>
        </div>
      );
  }
};

export default MainBox;
