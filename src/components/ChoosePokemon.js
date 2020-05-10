import React from 'react';
import '../style/App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import placeHolderImg from '../assets/pokeball.png';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const choosePokemon = ({ }) => {
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
        <Paper className="Action-box"elevation={1}>
            <Typography variant="h5" gutterBottom>
                <b>😺 FIND A POKEMON 😺</b> 
            </Typography>
            <hr/>
            <form noValidate autoComplete="off" className="Main-form">
                {/* <TextField className="subs" id="standard-basic" label="Enter Pokemon Name" /> */}
                <div className="theNinetyPercent">
                <br/>
                <TextField
                    select
                    label="Type Preferance"
                    onChange={handleChange}
                    helperText="Choose your favourite Pokemon Type"
                >
                    {pokemonTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <br />
                <br />
                
                <br />
                <br />
                <div>
                    <img className="Pokemon-sprite" src={placeHolderImg} />
                </div>
                </div>
                <br/>
                <Button variant="contained" color="primary" className="End-action-button"
                    onClick={() => {
                        // ..TODO
                    }}>
                    GO !
                 </Button>
            </form>
        </Paper>
    )
}

export default choosePokemon;