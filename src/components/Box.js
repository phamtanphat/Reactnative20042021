/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Child from './Child';
import {connect} from 'react-redux';

class Box extends Component {
  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center', fontSize: 30}}>
          Count : {this.props.count}
        </Text>
        <Child />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {count: state.count};
};

export default connect(mapStateToProps)(Box);
