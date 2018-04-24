/**
 * @author leon
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  WebView
} from 'react-native';
import AppStyle, { SystemStyle, PlatformStyle } from '../../styles';

export default class StoryDetailScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <WebView source={html} />
      </View>
    );
  }
}
const html = require('../../../res/html/index.html');
const styles = StyleSheet.create(
{
  rootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column
  }
}
);