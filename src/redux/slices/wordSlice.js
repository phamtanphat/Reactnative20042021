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
      const response = await axios.post(
        url,
        new URLSearchParams({
          en: en,
          vn: vn,
        }),
        config,
      );
      return response.data.word;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);
export const deleteWords = createAsyncThunk(
  '/delete-word',
  async (params, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const _id = params;
      const response = await axios.delete(`${url}/${_id}`);
      if (response.data.success) {
        return response.data.word;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const toggleWords = createAsyncThunk(
  '/toggle-word',
  async (params, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      thunkAPI.dispatch(setLoading(true));
      const {isMemorized, _id} = params;
      console.log(params);
      const response = await axios.put(
        `${url}/${_id}`,
        new URLSearchParams({
          isMemorized: isMemorized,
        }),
        config,
      );
      if (response.data.success) {
        return response.data.word;
      } else {
        thunkAPI.rejectWithValue('Cap nhat that bai');
      }
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
  reducers: {},
  extraReducers: {
    [fetchWords.fulfilled]: (state, action) => action.payload,
    [insertWords.fulfilled]: (state, action) => {
      state.unshift(action.payload);
      return state;
    },
    [deleteWords.fulfilled]: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === action.payload._id) {
          state.splice(i, 1);
        }
      }
      return state;
    },
    [toggleWords.fulfilled]: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === action.payload._id) {
          state[i].isMemorized = action.payload.isMemorized;
        }
      }
      return state;
    },
  },
});

const {reducer} = word;
export default reducer;
