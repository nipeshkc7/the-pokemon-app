import React, { useState } from 'react';
import '../style/App.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { useSelector, useDispatch } from 'react-redux';
import * as allActions from '../actions'

const TrainPokemon = () => {
    const appState = useSelector(state => state.AppStatus);
    const pokemon = useSelector(state => state.Pokemon);
    const [TrainCounter, setTrainCounter] = useState(10);
    const dispatch = useDispatch();
    let elevation = appState === 'TRAINING_POKEMON' ? 24 : 0;

    const train = () => {
        if (TrainCounter === 0) return;
        dispatch(allActions.train());
        setTrainCounter(TrainCounter - 1)
    }

    const giveBerries = () => {
        if (TrainCounter === 0) return;
        dispatch(allActions.giveBerries());
        setTrainCounter(TrainCounter - 1)
    }

    const pet = () => {
        if (TrainCounter === 0) return;
        dispatch(allActions.pet());
        setTrainCounter(TrainCounter - 1)
    }

    const bathe = () => {
        if (TrainCounter === 0) return;
        dispatch(allActions.bathe());
        setTrainCounter(TrainCounter - 1)
    }

    const simulateTraining = () => {
        let trainingArray = [train, giveBerries, pet, bathe]
        let currentTrainCounter = TrainCounter;
        for (let i = currentTrainCounter; i >= 0; i--) {
            currentTrainCounter--;
            trainingArray[Math.floor(Math.random() * trainingArray.length)]()
        }
        setTrainCounter(0)
    }

    return (
        <Grow in={true}>
            <Paper className="Action-box" elevation={elevation}>
                <Typography variant="h5" gutterBottom>
                    <b><span role="img" aria-label="emoji">👉</span> TRAIN POKEMON <span role="img" aria-label="emoji">👈</span></b>
                </Typography>
                <hr />
                Points left: {TrainCounter}
                <form noValidate autoComplete="off" className="Main-form">
                    <div className="theNinetyPercent">
                        <br />
                        <Button variant="outlined" color="secondary" onClick={simulateTraining}
                            disabled={appState !== 'TRAINING_POKEMON'}
                            className="Train-action">
                            <span role="img" aria-label="emoji">🌈</span> Simulate random training
                    </Button>
                        <br />
                        <br />
                OR,
                <br />
                        <br />
                        <Button variant="contained" color="secondary" onClick={train}
                            disabled={appState !== 'TRAINING_POKEMON'}
                            className="Train-action">
                            <span role="img" aria-label="emoji">💪</span> TRAIN POKEMON
                    </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="secondary" onClick={giveBerries}
                            disabled={appState !== 'TRAINING_POKEMON'}
                            className="Train-action">
                            <span role="img" aria-label="emoji">🍒</span> GIVE BERRIES
                    </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="secondary" onClick={pet}
                            disabled={appState !== 'TRAINING_POKEMON'}
                            className="Train-action">
                            <span role="img" aria-label="emoji">🐹</span> PET EM'
                    </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="secondary" onClick={bathe}
                            disabled={appState !== 'TRAINING_POKEMON'}
                            className="Train-action">
                            <span role="img" aria-label="emoji">🛁</span> BATHE
                    </Button>
                    </div>
                    <Button variant="contained" color="primary" className="End-action-button"
                        disabled={appState !== 'TRAINING_POKEMON'}
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