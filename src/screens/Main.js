/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Form from '../components/Form';
import Filter from '../components/Filter';
import Word from '../components/Word';
import {fetchWords} from '../redux/slices/wordSlice';
import {connect} from 'react-redux';
class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWords());
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Form />
        <Filter />
        {this.props.loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
          <Word />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  containerWord: {
    marginTop: '2%',
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
  containerPickerStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'black',
    padding: 20,
    marginBottom: 5,
  },
  pickerStyle: {
    padding: 50,
  },
});

const mapStateToProps = (state) => {
  return {loading: state.loading};
};

export default connect(mapStateToProps)(Main);
