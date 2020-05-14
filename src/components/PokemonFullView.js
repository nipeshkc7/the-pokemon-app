import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import * as allActions from "../actions";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { POKE_IMAGE_API_URL } from "../constants/AppConstants";
import { PokemonTypes } from "../constants/PokemonTypes";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function PokemonFullView() {
  const pokemon = useSelector((state) => state.Pokemon);
  const viewPokemon = useSelector((state) => state.ViewPokemon);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(allActions.toggleView());
  };
  if (pokemon.name !== undefined) {
    return (
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={viewPokemon}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            className="Capitalize "
          >
            <b>{pokemon.name} &nbsp;</b>
            {pokemon.types.map((type) => {
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
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <img
                  className="Pokedex-image"
                  src={`${POKE_IMAGE_API_URL}${pokemon.id}.png`}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <h2 gutterBottom>
                  <b>Stats</b>
                </h2>
                <b>Attack:</b> {pokemon.stats[4].base_stat}{" "}
                {pokemon.playerBoostedStats !== undefined && (
                  <span class="Player-boosted-stats"><i>+{pokemon.playerBoostedStats.attack}</i></span>
                )}
                <br />
                <b> Defense:</b> {pokemon.stats[5].base_stat}{" "}
                {pokemon.playerBoostedStats !== undefined && (
                  <span class="Player-boosted-stats"><i>+{pokemon.playerBoostedStats.attack}</i></span>
                )}
                <br />
                <b>Speed:</b> {pokemon.stats[0].base_stat}
                <br />
                <b>Special Attack:</b> {pokemon.stats[2].base_stat}
                <br />
                <b>Special Defense:</b> {pokemon.stats[3].base_stat}
                <br />
                <b>Loved:</b> {0}{" "}
                {pokemon.playerBoostedStats !== undefined && (
                  <span class="Player-boosted-stats"><i>+{pokemon.playerBoostedStats.user_affection}</i></span>
                )}
                <br />
                <b>Obedient:</b> {0}{" "}
                {pokemon.playerBoostedStats !== undefined && (
                  <span class="Player-boosted-stats"><i>+{pokemon.playerBoostedStats.obedience}</i></span>
                )}
                <br />
                <b>Clean:</b> {0}{" "}
                {pokemon.playerBoostedStats !== undefined && (
                  <span class="Player-boosted-stats"><i>+{pokemon.playerBoostedStats.hygiene}</i></span>
                )}
                <br />
                <br />
                {/* <LinearProgress/> */}
              </Grid>
            </Grid>
            <Typography gutterBottom>{pokemon.flavorText}</Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={viewPokemon}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        NO Pokemon data yet
      </DialogTitle>
    </Dialog>
  );
}
