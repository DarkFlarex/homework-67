import { configureStore } from '@reduxjs/toolkit';
import  {KeyboardReducer, KeyboardState} from '../containers/Keyboard/keyboardSlice';

export const store = configureStore<{ keyboard: KeyboardState }>({
    reducer: {
        keyboard: KeyboardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
