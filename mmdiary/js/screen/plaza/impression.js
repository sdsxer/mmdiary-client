/**
 * @author leon
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';
import AppStyle, { SystemStyle, PlatformStyle } from '../../styles';
import AppNav from '../../navigation';

export default class ImpressionScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.rootContainer}>
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  rootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column,
    backgroundColor: AppStyle.Color.Background
  },
});