import { createSlice } from '@reduxjs/toolkit';

interface AppState {
    menuOpen: boolean;
}

const initialState: AppState = {
    menuOpen: false,
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
        }
    }
});

export const { openMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
