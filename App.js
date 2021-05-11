/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    const word = {en: 'One', vn: 'Một', isMemorized: false};
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerWord}>
          <View style={styles.containerText}>
            <Text style={styles.textStyleEn}>{word.en}</Text>
            <Text style={styles.textStyleVn}>
              {word.isMemorized ? '----' : word.vn}
            </Text>
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              style={{
                ...styles.touchForgot,
                backgroundColor: word.isMemorized ? 'green' : 'red',
              }}>
              <Text style={styles.textTouchForgot}>
                {word.isMemorized ? 'Forgot' : 'Memorized'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchRemove}>
              <Text style={styles.textTouchRemove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
// ismemorized : Forgot - màu xanh
// isMemorized == false : Memorized - màu đỏ

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerWord: {
    justifyContent: 'center',
    height: '13%',
    flexDirection: 'column',
    backgroundColor: 'gainsboro',
    elevation: 5,
    borderRadius: 5,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerTouchable: {
    marginTop: 20,
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
  touchForgot: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  touchRemove: {
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  textTouchForgot: {
    fontSize: 14,
    color: 'white',
  },
  textTouchRemove: {
    fontSize: 14,
    color: 'black',
  },
});
