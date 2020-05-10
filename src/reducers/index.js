import { combineReducers } from 'redux'
import AppStatus from './AppStatus'
import Pokemon from './Pokemon'
import PlayerPreferance from './PlayerPreferance'

const rootReducer = combineReducers({
  AppStatus,
  Pokemon,
  PlayerPreferance,
})

export default rootReducer
