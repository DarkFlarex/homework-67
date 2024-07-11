import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface KeyboardState {
    input: string;
    isCorrect: boolean | null;
    showMessage: string;
}

const initialState: KeyboardState = {
    input: '',
    isCorrect: null,
    showMessage: '',
};

const truePin = "1337";

export const keyboardSlice =createSlice({
    name:'keyboard',
    initialState,
    reducers: {
        increase: (state, action: PayloadAction<string>) => {
            if (state.input.length < 4) {
                state.input += action.payload;
            }
        },
        deleteNumber: (state) => {
            state.input = state.input.slice(0, -1);
        },
        checkPin: (state) => {
            if (state.input === truePin) {
                state.isCorrect = true;
                state.showMessage = "Access Granted";
            } else {
                state.isCorrect = false;
                state.showMessage = "Access Denied";
            }
        },
    }
});
export const KeyboardReducer = keyboardSlice.reducer;

export const {
    increase,
    deleteNumber,
    checkPin,
}=keyboardSlice.actions