import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {setLoading} from './loadingSlice';
import { act } from 'react-test-renderer';

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

export const insertWords = createAsyncThunk(
  '/insert-word',
  async (params, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      thunkAPI.dispatch(setLoading(true));
      const {en, vn} = params;
      const response = await axios.post(url, {en, vn}, config);
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
    [fetchWords.fulfilled]: (state, action) => action.payload,
    [insertWords.fulfilled]: (state, action) => {
      return state.unshift(action.payload);
    },
    [insertWords.rejected] : (state,action) => {
      console.log(action.payload);
    }
  },
});

const {reducer, actions} = word;
export const {toggleWord, removeWord} = actions;
export default reducer;
