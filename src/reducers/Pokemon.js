import {
  SELECT_POKEMON,
  ADD_MOVE,
  TRAIN,
  GIVE_BERRIES,
  PET,
  BATHE,
} from "../constants/ActionTypes";

const pokemon_initial = {};

export default function Pokemon(state = pokemon_initial, action) {
  if (state.playerBoostedStats === undefined) {
    state.playerBoostedStats = {};
    state.playerBoostedStats.attack = 0;
    state.playerBoostedStats.defence = 0;
    state.playerBoostedStats.user_affection = 0;
    state.playerBoostedStats.obedience = 0;
    state.playerBoostedStats.hygiene = 0;
  }

  if (state.playerAddedMoves === undefined) {
    state.playerAddedMoves = [];
  }

  switch (action.type) {
    case SELECT_POKEMON:
      return { ...action.pokemon };
    case ADD_MOVE:
      state.playerAddedMoves.push(action.move);
      return state;
    case TRAIN:
      state.playerBoostedStats.attack += 20;
      state.playerBoostedStats.defence += 20;
      return state;
    case GIVE_BERRIES:
      state.playerBoostedStats.user_affection += 20;
      return state;
    case PET:
      state.playerBoostedStats.user_affection += 10;
      state.playerBoostedStats.obedience += 10;
      return state;
    case BATHE:
      state.playerBoostedStats.hygiene += 20;
      return state;
    default:
      return state;
  }
}
