/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import Word from './src/components/Word';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// store la du lieu duoc nhieu thang su dung toi
// state : du lieu cua store
// action : chi  thi de thay doi cua du lieu trong store

const defaultStore = {
  words: [
    {id: 1, en: 'One', vn: 'Một', isMemorized: false},
    {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
    {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
    {id: 4, en: 'Four', vn: 'Bốn', isMemorized: true},
    {id: 5, en: 'Five', vn: 'Năm', isMemorized: false},
  ],
  filterMode: null,
};

const store = createStore((state = defaultStore, action) => {
  return state;
});

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
