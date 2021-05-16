import { combineReducers } from 'redux';

import themesReducer from './themeReducer';

export default combineReducers({
    themes: themesReducer,
});