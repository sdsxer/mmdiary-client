/**
 * @author leon
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import AppStyle, { SystemStyle, PlatformStyle } from '../../styles';
import AppNav from '../../navigation';

export default class DynamicsScreen extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.rootContainer}>
        <FlatList
          style={styles.list}
          data={this._fakeData()}
          renderItem={({item}) => this._renderItem(item)}
          ItemSeparatorComponent={this._renderSeparator}>
        </FlatList>
      </View>
    );
  }

  _fakeData() {
    return [
      {
        key: 'news',
        title: '湖西新闻',
        content: '习近平总书记一行视察单县'
      },
      {
        key: 'story',
        title: '小城故事',
        content: '北上广深的单县人'
      }];
  }

  _renderItem(data) {
    console.log(JSON.stringify(data));
    return (
      <TouchableHighlight onPress={() => this._onListItemPress(data)}>
        {/* root container */}
        <View style={styles.listItemRootContainer}>
          {/* icon */}
          <Image style={styles.listItemIcon} source={require('../../../res/image/sample.png')}></Image>
          {/* content */}
          <View style={styles.listItemContentRootContainer}>
            {/* title */}
            <Text style={styles.listItemTitle} numberOfLines={1}>{data.title}</Text>
            {/* body */}
            <Text style={styles.listItemBody} numberOfLines={1}>{data.content}</Text>
          </View>
          {/* datetime */}
          <Text style={styles.listItemDatetime}>1分钟前</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onListItemPress(data) {
    console.log(JSON.stringify(data));
    if(data.key == 'news') {
      this.props.navigation.navigate(AppNav.Screen.News);
    }
    else if(data.key == 'story') {
      this.props.navigation.navigate(AppNav.Screen.Story);
    }
  }

  _renderSeparator() {
    return (
      <View style={styles.listDivider} />
    );
  }
}

const styles = StyleSheet.create(
{
  rootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column
  },
  list: {
  },
  listItemRootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Row,
    justifyContent: SystemStyle.JustifyContent.SpaceBewteen,
    alignItems: SystemStyle.AlignItems.Center,
    padding: 5,
    backgroundColor: AppStyle.Color.White
  },
  listItemContentRootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column,
    marginLeft: 5
  },
  listItemIcon: {
    width: 50,
    height: 50,
    resizeMode: SystemStyle.ResizeMode.Stretch
  },
  listItemTitle: {
    fontSize: AppStyle.TextSize.Large,
    color: AppStyle.Color.Black
  },
  listItemBody: {
    fontSize: AppStyle.TextSize.Medium,
    color: AppStyle.Color.Gray,
    marginTop: 5
  },
  listItemDatetime: {
    fontSize: AppStyle.TextSize.Tiny,
    color: AppStyle.Color.Gray,
    alignSelf: SystemStyle.AlignSelf.FlexStart
  },
  listDivider: {
    height:1, 
    backgroundColor:AppStyle.Color.LightGray
  }
}
);