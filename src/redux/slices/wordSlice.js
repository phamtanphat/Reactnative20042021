import {createSlice} from '@reduxjs/toolkit';

const defaultWords = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: false},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
  {id: 4, en: 'Four', vn: 'Bốn', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Năm', isMemorized: false},
];

const word = createSlice({
  name: 'words',
  initialState: defaultWords,
  reducers: {},
});

const {reducer, actions} = word;
export const {toggleWord} = actions;
export default reducer;
