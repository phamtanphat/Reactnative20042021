import {createSlice} from '@reduxjs/toolkit';

const filterMode = createSlice({
  name: 'filterMode',
  initialState: null,
  reducers: {},
});

const {reducer, actions} = filterMode;
// export const { toggleWord } = actions;
export default reducer;
