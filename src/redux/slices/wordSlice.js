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
  reducers: {
    addWord: (state, action) => {
      state.push(action.payload);
      return state;
    },
    toggleWord: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state[i].isMemorized = !state[i].isMemorized;
        }
      }
      return state;
    },
    removeWord: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state.splice(i, 1);
        }
      }
      return state;
    },
  },
});

const {reducer, actions} = word;
export const {addWord, toggleWord, removeWord} = actions;
export default reducer;
