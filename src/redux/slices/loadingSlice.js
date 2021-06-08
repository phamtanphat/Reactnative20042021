import {createSlice} from '@reduxjs/toolkit';

const loading = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    setLoading: (state, action) => action.payload,
  },
});

const {reducer, actions} = loading;
export const {setLoading} = actions;
export default reducer;
