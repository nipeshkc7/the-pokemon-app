import {
    SELECT_POKEMON,
    ADD_MOVE,
    TRAIN,
    GIVE_BERRIES,
    PET,
    BATHE,
} from '../constants/ActionTypes'

const pokemon_initial = {
    name: '',
    id: '',
    stats: {
        attack: 0,
        defence: 0,
        sp_attack: 0,
        sp_defence: 0,
        user_affection: 0,
        hygiene: 0,
        obedience: 0,
    },
    moves: []
}

export default function Pokemon(state = pokemon_initial, action) {
    switch (action.type) {
        case SELECT_POKEMON:
            return state = {}
        case ADD_MOVE:
            return state = {}
        case TRAIN:
            state.stats.attack += 20
            state.stats.defence += 20
            return state;
        case GIVE_BERRIES:
            state.stats.user_affection += 20
            return state;
        case PET:
            state.stats.user_affection +=10
            state.stats.obedience +=10
            return state;
        case BATHE:
            state.stats.hygiene +=20;
            return state;
        default:
            return state;
    }
} 