import * as types from '../constants/ActionTypes'

export const startApp = (startStatus) => ({ type: types.START_APP, startStatus })
export const pickPokemon = () => ({ type: types.PICK_POKEMON })
export const pickMoves = () => ({ type: types.PICK_MOVES })
export const trainPokemon = () => ({ type: types.TRAIN_MODE })
export const endApp = () => ({ type: types.END })

export const selectPokemon = (pokemon) => ({ type: types.SELECT_POKEMON }, pokemon)
export const addMove = (move) => ({ type: types.PICK_MOVES }, move)
export const train = () => ({ type: types.TRAIN })
export const giveBerries = () => ({ type: types.GIVE_BERRIES })
export const pet = () => ({ type: types.PET })
export const bathe = () => ({ type: types.BATHE })

export const selectPreference = (pType) => ({ type: types.CHOOSE_TYPE, pType })