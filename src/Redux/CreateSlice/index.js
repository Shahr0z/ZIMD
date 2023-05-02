import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    apiResponse: null,
};

export const ApiResponseSlice = createSlice({
    name: 'apiResponse',
    initialState,
    reducers: {
        showApiResponse: (state, action) => { state.apiResponse = action.payload },
    },
});
export const { showApiResponse } = ApiResponseSlice.actions;
export default ApiResponseSlice.reducer;

// When you want to use this slice in any component, you can use it like this:
// const moviesData = useSelector(state => state.apiCaller.apiResponse);