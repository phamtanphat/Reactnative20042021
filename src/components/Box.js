/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center', fontSize: 30}}>
          Count : {this.state.count}
        </Text>
        <Child that={this} count={this.state.count} />
      </View>
    );
  }
}
