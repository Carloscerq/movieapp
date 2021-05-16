import { SET_THEME, THEME_D, THEME_L } from '../actions';
import { theme } from '../../utils/interfaces';
import { HYDRATE } from "next-redux-wrapper";

const theme_dark_mode: theme = {
    type: THEME_D,
    backgroundColor: '#2B2B33',
    textColor: '#7779AD',
    buttonColor: '#EDAEB9'
};

const theme_light_mode: theme = {
    type: THEME_L,
    backgroundColor: '#DADADE',
    textColor: '#000000',
    buttonColor: '#B98753'
};




export default function setThemeReducer(state = theme_light_mode, action) {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.themes }

        case SET_THEME:
            if (action.payload.type == THEME_L) {
                return theme_dark_mode;
            }
            return theme_light_mode;
        default:
            return state;
    }
}