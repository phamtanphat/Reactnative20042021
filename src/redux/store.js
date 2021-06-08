import {configureStore} from '@reduxjs/toolkit';
import wordReducer from './slices/wordSlice';
import filterModeReducer from './slices/filterModeSlice';
import loadingReducer from './slices/loadingSlice';

const store = configureStore({
  reducer: {
    words: wordReducer,
    filterMode: filterModeReducer,
    loading: loadingReducer,
  },
});

export default store;
