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
import DataApi from '../../utils/data-api';
import I18n from '../../i18n/i18n';
import Moment from 'moment';
import Toast, {DURATION} from 'react-native-easy-toast';

export default class DynamicsScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      listData: []
    }
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <FlatList
          style={styles.list}
          data={this.state.listData}
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
          renderItem={({item}) => this._renderItem(item)}
          ItemSeparatorComponent={this._separator}
          ListEmptyComponent={this._listEmpty}>
        </FlatList>
        <Toast 
          ref="toast"
          position='bottom'
          positionValue={200}>
        </Toast>
      </View>
    );
  }

  _fetchData() {
    var delegate = this;
    DataApi.getDynamicsList()
    .then(response => {
      delegate.setState({refreshing: false});
      if(response.data.length > 0) { // update when new data
        for(var i = 0; i < response.data.length; i++) {
          response.data[i].key = response.data[i].categoryId;
        }
        delegate.setState({listData: response.data});
      }
    })
    .catch(error => {
      console.log(error);
      delegate.refs.toast.show(error, DURATION.LENGTH_LONG);
    });
  }

  _onRefresh = () => {
    this._fetchData();
  }

  _renderItem(item) {
    return (
      <TouchableHighlight onPress={() => this._onListItemPress(item)}>
        {/* root container */}
        <View style={styles.listItemRootContainer}>
          {/* icon */}
          <Image style={styles.listItemIcon} source={require('../../../res/image/sample.png')}></Image>
          {/* content */}
          <View style={styles.listItemContentRootContainer}>
            {/* title */}
            <Text style={styles.listItemTitle} numberOfLines={1}>{item.categoryName}</Text>
            {/* body */}
            <Text style={styles.listItemBody} numberOfLines={1}>{item.title}</Text>
          </View>
          {/* datetime */}
          <Text style={styles.listItemDatetime}>{Moment.unix(item.time).format("YYYY-MM-DD HH:mm:ss")}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onListItemPress(item) {
    if(item.key == '0') {
      this.props.navigation.navigate(AppNav.Screen.Notice);
    }
    else if(item.key == '1') {
      this.props.navigation.navigate(AppNav.Screen.News);
    }
    else if(item.key == '2') {
      this.props.navigation.navigate(AppNav.Screen.Story);
    }
  }

  _separator = () => {
    return <View style={styles.listDivider} />;
  }

  _listEmpty = () => {
    if(this.state.refreshing) {
      return null;
    }
    else {
      return (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListTip}>
            {I18n.t('no_data_tip')}
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create(
{
  rootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column
  },
  emptyListContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column,
    justifyContent: SystemStyle.JustifyContent.Center,
    alignItems: SystemStyle.AlignItems.Center
  },
  emptyListTip: {

  },
  list: {
    flex: 1
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
    height: 1,
    backgroundColor: AppStyle.Color.LightGray
  }
}
);