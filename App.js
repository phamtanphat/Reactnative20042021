/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  render() {
    const word = {en: 'One', vn: 'Một'};
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textStyleEn}>{word.en}</Text>
        <Text style={styles.textStyleVn}>{word.vn}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyleEn: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  textStyleVn: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
