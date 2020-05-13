import React, { useEffect, useState } from "react";
import "../style/App.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import placeHolderImg from "../assets/pokeball.png";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { useDispatch, useSelector } from "react-redux";
import * as allActions from "../actions";
import { POKE_API_URL, POKE_IMAGE_API_URL } from "../constants/AppConstants";
import { PokemonTypes } from "../constants/PokemonTypes";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const getAdditionalInfo = async (pokemonName) => {
  let additionalInfo = await fetch(
    `${POKE_API_URL}pokemon-species/${pokemonName}`
  );
  return await additionalInfo.json();
};

const getFlavorText = async (pokemonName) => {
  let additionalInfo = await getAdditionalInfo(pokemonName);
  let flavorTextEntries = additionalInfo.flavor_text_entries;
  let enlgishFlavorTextEntries = flavorTextEntries.filter(
    (fEntry) => fEntry.language.name === "en"
  );
  console.log(enlgishFlavorTextEntries);
  return enlgishFlavorTextEntries[0].flavor_text;
};

const getRandomPokemon = async (pokemonType) => {
  let response = await fetch(`${POKE_API_URL}type/${pokemonType}/`);
  let pokemonNames = (await response.json()).pokemon.map(
    (pokemon) => pokemon.pokemon.name
  );
  let RandomPokemonName =
    pokemonNames[Math.floor(Math.random() * (pokemonNames.length - 1))]; //Picks out a random pokemon name
  let getPokemonInfo = await fetch(
    `${POKE_API_URL}pokemon/${RandomPokemonName}`
  );
  return await getPokemonInfo.json();
};

function ChoosePokemon() {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const [playerPreference, setPlayerPreference] = useState("normal");
  const [pokemonImg, setPokemonImg] = useState(placeHolderImg);

  const pokemon = useSelector((state) => state.Pokemon);
  const appState = useSelector((state) => state.AppStatus);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setPlayerPreference(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let pokemon = await getRandomPokemon(playerPreference);
    let flavorText = await getFlavorText(pokemon.name);
    setPokemonImg(`${POKE_IMAGE_API_URL}${pokemon.id}.png`);
    dispatch(allActions.selectPokemon({ ...pokemon, flavorText }));
    dispatch(allActions.pickMoves());
    setState({ ...state, open: true });
    dispatch(allActions.toggleView());
  };

  let elevation = appState === "PICKING_POKEMON" ? 24 : 0;

  return (
    <Grow in={true}>
      <Paper className="Action-box" elevation={elevation}>
        <Typography variant="h5" gutterBottom>
          <b>
            <span role="img" aria-label="emoji">
              😺
            </span>{" "}
            FIND A POKEMON{" "}
            <span role="img" aria-label="emoji">
              😺
            </span>
          </b>
        </Typography>
        <hr />
        <form autoComplete="off" className="Main-form" onSubmit={handleSubmit}>
          <div className="theNinetyPercent">
            <br />
            {appState === "PICKING_POKEMON" && (
              <TextField
                name="pokemonType"
                select
                label="Type Preferance"
                helperText="Choose your favourite Pokemon Type"
                onChange={handleChange}
              >
                {PokemonTypes.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                    <span role="image">{option.icon}</span>&nbsp; {option.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
            {appState !== "PICKING_POKEMON" &&
              pokemon.types.map((type) => {
                return (
                  <Chip
                    className="Player-chosen-type"
                    clickable
                    avatar={
                      <Avatar>
                        {
                          PokemonTypes.find(
                            (pType) => pType.name === type.type.name
                          ).icon
                        }
                      </Avatar>
                    }
                    label={type.type.name}
                  ></Chip>
                );
              })}
            <br />
            <br />

            <br />
            <br />
            <div>
              <img className="Pokemon-sprite" src={pokemonImg} />
            </div>
            <b className="Pokemon-name">
              <a href="">{pokemon.name}</a>
            </b>
          </div>
          <br />
          {appState === "PICKING_POKEMON" && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="End-action-button"
            >
              GO !
            </Button>
          )}
          {appState !== "PICKING_POKEMON" && (
            <Button
              variant="contained"
              color="info"
              className="End-action-button"
              onClick={() => dispatch(allActions.toggleView())}
            >
              View stats
            </Button>
          )}
        </form>
        {pokemon.sprites !== undefined &&
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          open={open}
          onClose={handleClose}
          autoHideDuration={5000}
          message={`Congrats ! You caught a ${pokemon.name}`}
        >
          <Alert onClose={handleClose}>
            Congrats You caught a {pokemon.name} ! <img className="Pokemon-sprite-small" src={pokemon.sprites.front_default}/>
          </Alert>
        </Snackbar>
        }
      </Paper>
    </Grow>
  );
}

export default ChoosePokemon;
