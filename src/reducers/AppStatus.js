import {
    START_APP
} from '../constants/ActionTypes'

const APP_STATE = 'WELCOME';

export default function AppStatus(state = APP_STATE, action) {
    switch (action.type) {
        case START_APP:
            return 'STARTED';
        default:
            return state;
    }
}