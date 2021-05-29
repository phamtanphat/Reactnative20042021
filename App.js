/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import Word from './src/components/Word';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const defaultWords = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: false},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
  {id: 4, en: 'Four', vn: 'Bốn', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Năm', isMemorized: false},
];

function wordReducer(state = defaultWords, action) {
  if (action.type === 'ADD_WORD') {
    const newWords = state.map((word) => {
      return {...word};
    });
    newWords.push(action.newWord);
    return newWords;
  }
  if (action.type === 'TOGGLE_WORD') {
    const newWords = state.map((item) => {
      if (item.id === action.word.id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.words.filter((item) => {
      if (item.id === action.word.id) {
        return false;
      }
      return true;
    });
    return newWords;
  }
  return state;
}
function filterModeReducer(state = null, action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.filterMode;
  }
  return state;
}
const reducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
});

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <Main /> */}
        {/* <Form/> */}
        {/* <Filter /> */}
        {/* <Word /> */}
        <Provider store={store}>
          <Main />
        </Provider>
      </SafeAreaView>
    );
  }
}
