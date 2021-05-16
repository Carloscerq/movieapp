import { combineReducers } from 'redux';

import themesReducer from './themeReducer';

export const rootReducer = combineReducers({
    themes: themesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;