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

export default class NewsScreen extends React.Component {
  
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
        {/* headline */}
        <TouchableWithoutFeedback onPress={() => this._onListItemClick()}>
          <View style={styles.listItemHeadlineContainer}>
            <Image style={styles.listItemHeadlineImage} source={require('../../../res/image/sample_news.jpg')} />
            <Text style={styles.listItemHeadlineTitle}>烈士陵园之歌</Text>
          </View>
        </TouchableWithoutFeedback>
        {/* secondary */}
        <TouchableHighlight underlayColor={AppStyle.Color.LightGray} onPress={() => this._onListItemClick()}>
          <View style={styles.listItemSecondaryContainer}>
            <Text style={styles.listItemSecondaryTitle} numberOfLines={2}>单县为什么会是这个样子</Text>
            <Image style={styles.listItemSecondaryImage} source={require('../../../res/image/sample_news_1.jpeg')} />
          </View>
        </TouchableHighlight>
        {/* separator */}
        <View style={styles.listItemSeparator} />
        {/* bottom */}
        <TouchableHighlight underlayColor={AppStyle.Color.LightGray} onPress={() => this._onListItemClick()}>
          <View style={styles.listItemBottomContainer}>
            <Text style={styles.listItemSecondaryTitle} numberOfLines={2}>长大后，乡愁是一枚小小的车票，我在这头，故乡在那头</Text>
            <Image style={styles.listItemSecondaryImage} source={require('../../../res/image/sample_news_1.jpeg')} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  _onListItemClick() {
    this.props.navigation.navigate(AppNav.Screen.NewsDetail);
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
    flexDirection: SystemStyle.FlexDirection.Column,
    backgroundColor: AppStyle.Color.Background
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
  listItemHeadlineContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column,
    borderTopLeftRadius: cornerRadius,
    borderTopRightRadius: cornerRadius,
    overflow: SystemStyle.OverFlow.Hidden
  },
  listItemHeadlineImage: {
    height: 180,
    width: PlatformStyle.ScreenWidth - 40,
    resizeMode: SystemStyle.ResizeMode.Stretch
  },
  listItemHeadlineTitle: {
    fontSize: AppStyle.TextSize.Extra,
    color: AppStyle.Color.White,
    position: SystemStyle.Position.Absolute,
    bottom: 8,
    paddingHorizontal: 8
  },
  listItemSecondaryContainer: {
    flexDirection: SystemStyle.FlexDirection.Row,
    alignItems: SystemStyle.AlignItems.Center,
    padding: 15,
    width: PlatformStyle.ScreenWidth - 40,
    backgroundColor: AppStyle.Color.White
  },
  listItemSecondaryImage: {
    width: 60,
    height: 60,
    resizeMode: SystemStyle.ResizeMode.Stretch
  },
  listItemSecondaryTitle: {
    flex: 1,
    fontSize: AppStyle.TextSize.Large,
    color: AppStyle.Color.Black,
    marginRight: 8
  },
  listItemBottomContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Row,
    alignItems: SystemStyle.AlignItems.Center,
    padding: 15,
    width: PlatformStyle.ScreenWidth - 40,
    backgroundColor: AppStyle.Color.White,
    borderBottomLeftRadius:cornerRadius,
    borderBottomRightRadius:cornerRadius,
    overflow: SystemStyle.OverFlow.Hidden
  },
  listItemSeparator: {
    height: 0.5,
    backgroundColor: AppStyle.Color.LightGray
  }
}
);