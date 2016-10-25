
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Root from './sources/Root';

export default class ReactNativeDemo extends Component {
  render() {
    return (
      <Root/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
