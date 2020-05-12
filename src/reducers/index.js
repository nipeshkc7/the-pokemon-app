import { combineReducers } from 'redux'
import AppStatus from './AppStatus'
import Pokemon from './Pokemon'
import PlayerPreferance from './PlayerPreferance'
import ViewPokemon from './ViewPokemon'

const rootReducer = combineReducers({
  AppStatus,
  Pokemon,
  PlayerPreferance,
  ViewPokemon,
})

export default rootReducer
