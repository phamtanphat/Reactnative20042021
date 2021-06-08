import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {setLoading} from './loadingSlice';

const url = 'https://servernode29122020.herokuapp.com/word';

export const fetchWords = createAsyncThunk(
  '/word',
  async (params, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axios.get(url);
      return response.data.words;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

const word = createSlice({
  name: 'words',
  initialState: [],
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
  extraReducers: {
    [fetchWords.pending]: (state, action) => {
      console.log('Pendding');
    },
    [fetchWords.fulfilled]: (state, action) => action.payload,
    [fetchWords.rejected]: (state, action) => {
      console.log('Rejected ---- ', action.payload);
    },
  },
});

const {reducer, actions} = word;
export const {addWord, toggleWord, removeWord} = actions;
export default reducer;
