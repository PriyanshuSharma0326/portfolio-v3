import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../types';

const initialState: AppState = {
    menuOpen: false,
    language: 'en'
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        openMenu: (state) => {
            state.menuOpen = true;
        },
        closeMenu: (state) => {
            state.menuOpen = false;
        },
        setDefaultLanguage: (state) => {
            state.language = 'en';
        },
        changeToSpanish: (state) => {
            state.language = 'es';
        },
    }
});

export const { openMenu, closeMenu, setDefaultLanguage, changeToSpanish } = appSlice.actions;
export default appSlice.reducer;
