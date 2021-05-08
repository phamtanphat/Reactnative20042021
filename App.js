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
    const word = {en: 'One', vn: 'Một', isMemorized: true};
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.textStyleEn}>{word.en}</Text>
          <Text style={styles.textStyleVn}>
            {word.isMemorized ? '----' : word.vn}
          </Text>
        </View>
        <View style={styles.containerTouchable}>
          <TouchableOpacity
            style={{padding: 10, backgroundColor: 'green', borderRadius: 5}}>
            <Text style={{fontSize: 14, color: 'white'}}>Forgot</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 10, backgroundColor: 'yellow', borderRadius: 5}}>
            <Text style={{fontSize: 14, color: 'black'}}>Remove</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
});
