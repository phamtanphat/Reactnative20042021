import wordReducer from './wordReducer';
import filterModeReducer from './filterModeReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
});

export default reducer;
