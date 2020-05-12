import {
    START_APP,
    PICK_POKEMON,
    PICK_MOVES,
    TRAIN_MODE,
    END,
} from '../constants/ActionTypes'

const APP_STATE = 'NOT_STARTED';

export default function AppStatus(state = APP_STATE, action) {
    switch (action.type) {
        case START_APP:
            return 'PICKING_POKEMON';
        case PICK_POKEMON:
            return 'PICKING_POKEMON';
        case PICK_MOVES:
            return 'PICKING_MOVES';
        case TRAIN_MODE:
            return 'TRAINING_POKEMON';
        case END:
            return 'END';
        default:
            return state;
    }
}