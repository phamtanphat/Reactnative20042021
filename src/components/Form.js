/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', marginHorizontal: 5}}>
        <Text style={{alignSelf: 'center', fontSize: 20}}> Man hinh Form </Text>
        <TextInput
          style={{
            alignSelf: 'stretch',
            borderRadius: 5,
            borderWidth: 1,
            padding: 10,
          }}
          placeholder="Nhap user name"
        />
      </View>
    );
  }
}
