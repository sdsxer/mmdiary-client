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

export default class StoryScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <FlatList
          style={styles.list}
          data={[{key: 'one'}]}
          renderItem={({item}) => this._renderListItem(item)}>
        </FlatList>
      </View>
    );
  }

  _renderListItem(item) {
    return (
      <View style={styles.listItemRootContainer}>
        {/* datetime */}
        <View style={styles.listItemDatetimeContainer}>
          <Text style={styles.listItemDatetime}>yesterday 11:56</Text>
        </View>
        {/* image */}
        <TouchableWithoutFeedback onPress={() => this._onListItemClick()}>
          <View style={styles.listItemImageContainer}>
            <Image style={styles.listItemImage} source={require('../../../res/image/sample_news.jpg')} />
          </View>
        </TouchableWithoutFeedback>
        {/* content */}
        <TouchableHighlight underlayColor={AppStyle.Color.LightGray} onPress={() => this._onListItemClick()}>
          <View style={[styles.listItemContentContainer]}>
            <Text style={styles.listItemContentTitle} numberOfLines={2}>为什么会是这个样子</Text>
            <Text style={styles.listItemContentBody} numberOfLines={2}>为什么会是这个样子，阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯顿发斯蒂芬</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  _onListItemClick() {
    this.props.navigation.navigate(AppNav.Screen.StoryDetail);
  }
}

const cornerRadius = 5;

const styles = StyleSheet.create(
{
  rootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column,
    backgroundColor: AppStyle.Color.Background
  },
  list: {
    marginHorizontal: 20
  },
  listItemRootContainer: {
    backgroundColor: AppStyle.Color.Background,
    flexDirection: SystemStyle.FlexDirection.Column
  },
  listItemDatetimeContainer: {
    backgroundColor: AppStyle.Color.DarkGray,
    borderRadius: cornerRadius,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginVertical: 15,
    alignSelf: SystemStyle.AlignSelf.Center
  },
  listItemDatetime: {
    fontSize: AppStyle.TextSize.Tiny,
    color: AppStyle.Color.White
  },
  listItemImageContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column,
    borderTopLeftRadius: cornerRadius,
    borderTopRightRadius: cornerRadius,
    overflow: SystemStyle.OverFlow.Hidden
  },
  listItemImage: {
    height: 180,
    width: PlatformStyle.ScreenWidth - 40,
    resizeMode: SystemStyle.ResizeMode.Stretch
  },
  listItemContentContainer: {
    flexDirection: SystemStyle.FlexDirection.Column,
    padding: 15,
    width: PlatformStyle.ScreenWidth - 40,
    backgroundColor: AppStyle.Color.White,
    borderBottomLeftRadius: cornerRadius,
    borderBottomRightRadius: cornerRadius,
    overflow: SystemStyle.OverFlow.Hidden
  },
  listItemContentTitle: {
    fontSize: AppStyle.TextSize.Large,
    color: AppStyle.Color.Black
  },
  listItemContentBody: {
    fontSize: AppStyle.TextSize.Medium,
    color: AppStyle.Color.Gray,
    marginTop: 8
  }
}
);