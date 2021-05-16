import { theme } from '../../utils/interfaces';

export const SET_THEME = 'SET_THEME';
export const THEME_D = 'THEME_DARK';
export const THEME_L = 'THEME_LIGHT';

export const setTheme = (themeObj: theme) => ({
    type: SET_THEME,
    payload: themeObj,
});