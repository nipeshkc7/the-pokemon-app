import React, { useEffect, useState } from 'react';
import '../style/App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import placeHolderImg from '../assets/pokeball.png';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { useDispatch, useSelector } from 'react-redux';
import * as allActions from '../actions';
import { POKE_API_URL , POKE_IMAGE_API_URL} from '../constants/AppConstants';

const getPokemonTypeList = async () => {
    let response = await fetch(`${POKE_API_URL}type`);
    let data = await response.json();
    return data.results.map(obj => obj.name);
}

const getRandomPokemon = async (pokemonType) => {
    console.log(`player prefers ${pokemonType}`);       
    let response = await fetch(`${POKE_API_URL}type/${pokemonType}/`);
    let pokemonNames = (await response.json()).pokemon.map(pokemon=>pokemon.pokemon.name);
    let RandomPokemonName = pokemonNames[Math.floor(Math.random() * (pokemonNames.length - 1))]; //Picks out a random pokemon name
    let getPokemonInfo = await fetch(`${POKE_API_URL}pokemon/${RandomPokemonName}`);
    return (await getPokemonInfo.json());
}

const getPokemonPicture = async (pokemonId) => {
    return '';
}

function ChoosePokemon() {

    const [pokemonTypes, setPokemonTypes] = useState(['']);
    const [playerPreference, setPlayerPreference] = useState('normal');
    const [pokemon, setPokemon]= useState({});
    const [pokemonImg, setPokemonImg]= useState(placeHolderImg);

    const appState = useSelector(state => state.AppStatus);
    // const playerPreference = useSelector(state => state.playerPreference)
    const dispatch = useDispatch();

    const handleChange = (event) =>{
        setPlayerPreference(event.target.value);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        let pokemon = await getRandomPokemon(playerPreference);
        setPokemon(pokemon);
        setPokemonImg(`${POKE_IMAGE_API_URL}${pokemon.id}.png`);
    }

    let elevation = appState === 'PICKING_POKEMON' ? 4 : 0;

    useEffect(() => {
        async function getList() {
            setPokemonTypes(await getPokemonTypeList());
        }
        getList();
    }, []);

    return (
        <Grow in={true}>
            <Paper className="Action-box" elevation={elevation}>
                <Typography variant="h5" gutterBottom>
                    <b><span role="img" aria-label="emoji">😺</span> FIND A POKEMON <span role="img" aria-label="emoji">😺</span></b>
                </Typography>
                <hr />
                <form autoComplete="off" className="Main-form" onSubmit={handleSubmit}>
                    <div className="theNinetyPercent">
                        <br />
                        <TextField
                            name="pokemonType"
                            select
                            label="Type Preferance"
                            helperText="Choose your favourite Pokemon Type"
                            onChange={handleChange}
                        >
                            {pokemonTypes.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <br />
                        <br />

                        <br />
                        <br />
                        <div>
                            <img className="Pokemon-sprite" src={pokemonImg} />
                        </div>
                        <b className="Pokemon-name">{pokemon.name}</b>
                    </div>
                    <br />
                    <Button type="submit" variant="contained" color="primary"
                    className="End-action-button">
                        GO !
                 </Button>
                </form>
            </Paper>
        </Grow>
    )
}

export default ChoosePokemon;