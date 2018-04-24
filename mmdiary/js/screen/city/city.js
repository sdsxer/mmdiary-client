/**
 * @author leon
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import AppStyle, { SystemStyle, PlatformStyle } from '../../styles';

export default class CityScreen extends React.Component {

  render() {
    return (
      <Text>CityScreen</Text>
    );
  }
}

const styles = StyleSheet.create(
{
  rootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column
  }
}
);