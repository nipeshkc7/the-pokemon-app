import React from 'react';
import '../style/App.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import {useSelector, useDispatch} from 'react-redux';
import * as allActions from '../actions'

const TrainPokemon = () => {
    const appState = useSelector(state => state.AppStatus);
    const dispatch = useDispatch();
    let elevation = appState === 'TRAINING_POKEMON' ? 4: 0;

    return (
        <Grow in={true}>
            <Paper className="Action-box" elevation={elevation}>
                <Typography variant="h5" gutterBottom>
                    <b><span role="img" aria-label="emoji">👉</span> TRAIN POKEMON <span role="img" aria-label="emoji">👈</span></b>
                </Typography>
                <hr />
                <form noValidate autoComplete="off" className="Main-form">
                    <br />
                    <div className="theNinetyPercent">
                        <br />
                        <Button variant="outlined" color="secondary"
                            className="Train-action">
                            <span role="img" aria-label="emoji">🌈</span> Simulate random training
                    </Button>
                        <br />
                        <br />
                OR,
                <br />
                        <br />
                        <Button variant="contained" color="secondary"
                            className="Train-action">
                            <span role="img" aria-label="emoji">💪</span> TRAIN POKEMON
                    </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="secondary"
                            className="Train-action">
                            <span role="img" aria-label="emoji">🍒</span> GIVE BERRIES
                    </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="secondary"
                            className="Train-action">
                            <span role="img" aria-label="emoji">🐹</span> PET EM'
                    </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="secondary"
                            className="Train-action">
                            <span role="img" aria-label="emoji">🛁</span> BATHE
                    </Button>
                    </div>
                    <Button variant="contained" color="primary" className="End-action-button"
                        onClick={() => {
                            dispatch(allActions.endApp());
                        }}>
                        Done !
                        </Button>

                </form>
            </Paper>
        </Grow>
    )
}

export default TrainPokemon;