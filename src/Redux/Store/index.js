import { configureStore } from '@reduxjs/toolkit';
import ApiResponseReducer from './createSlice';
export const store = configureStore({
    reducer: {
        apiCaller: ApiResponseReducer,
    },
});
