import {configureStore} from '@reduxjs/toolkit';
import wordReducer from './slices/wordSlice';
import filterModeReducer from './slices/filterModeSlice';

const store = configureStore({
  reducer: {
    words: wordReducer,
    filterMode: filterModeReducer,
  },
});

export default store;
