import React from 'react';
import '../style/App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/DoneOutlined'

const trainPokemon = ({ }) => {
    const pokemonTypes = [
        {
            value: 'Normal',
            label: 'Normal',
        },
        {
            value: 'Fighting',
            label: 'Fighting',
        },
        {
            value: 'Ghost',
            label: 'Ghost',
        },
        {
            value: 'Dark',
            label: 'Dark',
        },
    ];

    const handleChange = (event) => {
        // setCurrency(event.target.value);
    };

    return (
        <Paper className="Action-box" elevation={1}>
            <Typography variant="h5" gutterBottom>
                <b>👉 TRAIN POKEMON 👈</b>
            </Typography>
            <hr />
            <form noValidate autoComplete="off" className="Main-form">
                <br />
                <div className="theNinetyPercent">
                    <br />
                    <Button variant="outlined" color="secondary"
                        className="Train-action">
                        🌈 Simulate random training
                    </Button>
                    <br />
                    <br />
                OR,
                <br />
                    <br />
                    <Button variant="contained" color="secondary"
                        className="Train-action">
                        💪 TRAIN POKEMON
                    </Button>
                    <br />
                    <br />
                    <Button variant="contained" color="secondary"
                        className="Train-action">
                        🍒 GIVE BERRIES
                    </Button>
                    <br />
                    <br />
                    <Button variant="contained" color="secondary"
                        className="Train-action">
                        🐹 PET EM'
                    </Button>
                    <br />
                    <br />
                    <Button variant="contained" color="secondary"
                        className="Train-action">
                        🛁 BATHE
                    </Button>
                </div>
                <Button variant="contained" color="primary" className="End-action-button"
                    alignContent="flex-end"
                    onClick={() => {
                        // ..TODO
                    }}>
                    Done !
                        </Button>

            </form>
        </Paper>
    )
}

export default trainPokemon;