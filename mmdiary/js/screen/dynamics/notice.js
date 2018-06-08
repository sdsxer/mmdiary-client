/**
 * @author leon
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';

export default class NoticeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <FlatList
          >

        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  rootContainer: {

  }
}
)

