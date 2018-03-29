import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginForm from './src/components/Login';
import DetailScreen from './src/components/DetailScreen';

const RootStack = StackNavigator({
  Home: {screen: LoginForm},
  Details: {screen : DetailScreen}
},{
  initialRouteName: 'Home',
});

export default class App extends React.Component {
  render() {
    return ( <RootStack />);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
