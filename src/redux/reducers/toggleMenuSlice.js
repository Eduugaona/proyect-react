import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleMenuOn: false,
}

export const toggleMenuSlice = createSlice({
    name:'toggleMenu',
    initialState,
    reducers: {
        toggleMenuOn: (state, action) => {
            state.toggleMenuOn = action.payload
        }
    }})

    export const {toggleMenuOn} = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;