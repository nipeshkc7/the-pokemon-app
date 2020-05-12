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
import LinearProgress from "@material-ui/core/LinearProgress";
import { POKE_IMAGE_API_URL } from "../constants/AppConstants";

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
  const appState = useSelector((state) => state.AppStatus);
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
          <DialogTitle id="customized-dialog-title" onClose={handleClose} className="Capitalize ">
            <b>{pokemon.name}</b>
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
                <Typography gutterBottom>
                  <b>Stats</b>
                </Typography>
                Attack: {pokemon.stats[4].base_stat}
                <br />
                Defense: {pokemon.stats[5].base_stat}
                <br />
                Loved: {0}
                <br />
                Obedient: {0}
                <br />
                Clean: {0}
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
