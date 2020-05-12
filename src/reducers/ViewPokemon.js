import { TOGGLE_VIEW } from "../constants/ActionTypes";

const VIEW_POKEMON = false;

export default function (state = VIEW_POKEMON, action) {
  if (action.type === TOGGLE_VIEW) return !state;
  return state;
}
