import { CHOOSE_TYPE } from "../constants/ActionTypes";

const pokemon_type_default = "";

export default function Pokemon(state = pokemon_type_default, action) {
  switch (action.type) {
    case CHOOSE_TYPE:
      return (state = action.pokemon_type);
    default:
      return state;
  }
}
