import React, { useState } from "react";
import "../style/App.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Grow from "@material-ui/core/Grow";
import DoneIcon from "@material-ui/icons/DoneOutlined";
import { useSelector, useDispatch } from "react-redux";
import * as allActions from "../actions";
import Snackbar from "@material-ui/core/Snackbar";

const getMoveByName = (pokemon, name) => {
  if (pokemon === undefined) return;
  let moveList = pokemon.moves.map((move) => move.move.name);
  if (moveList.includes(name)) return name;
  return undefined;
};

const get3RandomMoves = (pokemon) => {
  if (pokemon === undefined) return;
  let moveList = pokemon.moves.map((move) => move.move.name);
  const RandomMoves = [];
  for (let i = 0; i < 3; i++) {
    RandomMoves.push(
      moveList[Math.floor(Math.random() * (moveList.length - 1))]
    );
  }
  return RandomMoves.map(move=> move.toUpperCase());
};

const addMove = (moveList, move) => {
  let moveListCopy = [...moveList];
  if (moveList.length === 3) {
    moveListCopy.shift();
    return [...moveListCopy, move.toUpperCase()];
  }
  return [...moveList, move.toUpperCase()];
};

const ChooseMoves = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const appState = useSelector((state) => state.AppStatus);
  const pokemon = useSelector((state) => state.Pokemon);
  const dispatch = useDispatch();
  const [moveList, setMoveList] = useState([]);

  let elevation = appState === "PICKING_MOVES" ? 24 : 0;

  const handleGenerateMoves = () => {
    setMoveList(get3RandomMoves(pokemon));
  };

  const findMove = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      let move = getMoveByName(pokemon, e.target.value);
      if (move !== undefined) {
        setMoveList(addMove(moveList, move));
      } else {
        setState({ ...state, open: true });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grow in={true}>
      <Paper className="Action-box" elevation={elevation}>
        <Typography variant="h5" gutterBottom>
          <b>
            <span role="img" aria-label="emoji">
              ✨
            </span>{" "}
            SELECT MOVES{" "}
            <span role="img" aria-label="emoji">
              ✨
            </span>
          </b>
        </Typography>
        <hr />
        <form autoComplete="off" className="Main-form" onSubmit={handleSubmit}>
          <br />
          <div className="theNinetyPercent">
            <TextField
              id="standard-basic"
              label="Enter Move Name"
              onKeyUp={findMove}
              disabled={appState !== "PICKING_MOVES"}
            />
            <br />
            <br />
            OR,
            <br />
            <br />
            <Button
              variant="contained"
              color="secondary"
              className="Train-action"
              onClick={handleGenerateMoves}
              disabled={appState !== "PICKING_MOVES"}
            >
              Get Random Moves
            </Button>
            <div>
              <List>
                {moveList.map((move) => (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <DoneIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={move} secondary="No Type" />
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            className="End-action-button"
            disabled={appState !== "PICKING_MOVES"}
            onClick={() => {
              moveList.forEach((move) => {
                if (move !== undefined) dispatch(allActions.addMove(move));
              });
              dispatch(allActions.trainPokemon());
            }}
          >
            Done !
          </Button>
        </form>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          open={open}
          onClose={handleClose}
          autoHideDuration={5000}
          message={`Move unavailable ! ☹ `}
        ></Snackbar>
      </Paper>
    </Grow>
  );
};

export default ChooseMoves;
