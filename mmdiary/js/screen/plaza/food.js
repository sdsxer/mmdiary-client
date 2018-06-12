/**
 * @author leon
 */

import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import I18n from '../../i18n/i18n';
import AppStyle, { SystemStyle, PlatformStyle } from '../../styles';
import AppNav from '../../navigation';
import DataApi from '../../utils/data-api';
import FastImage from 'react-native-fast-image';

export default class FoodScreen extends React.Component {

  constructor(props) {
    super(props);

    this.index = 0;
    this.pageSize = 5;
    this.total = 0;
    this.hasMore = false;

    this.state = {
      tipVisiable: false,
      tipType: 1, // 1-network exception, 2-no data, 3-fetch data failed;
      refreshing: true,
      footerState: 1, // 1-load more, 2-loading, 3-no more data, 4-load more failed;
      listData: []
    }
  }

  componentDidMount() {
    this._fetchData(0, this.pageSize);
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        {/* list */}
        <FlatList
          data={this.state.listData}
          refreshing={this.state.refreshing}
          onRefresh={() => this._onRefresh()}
          renderItem={({item}) => this._renderItem(item)}
          ListFooterComponent={() => this._renderListFooter()}
          ListEmptyComponent={() => this._renderEmptyList()}
          keyExtractor={this._keyExtractor}
          onEndReached={() => this._onLoadMore()}
          onEndReachedThreshold={0.1}>
        </FlatList>
      </View>
    );
  }

  _renderItem(item) {
    return (
      <View style={styles.rowContainer}>
        {/* title */}
        <View style={styles.rowTitleContainer}>
          <Text style={styles.rowTitle}>{item.title}</Text>
          <Text style={styles.rowTitle}>{'TOP ' + item.rank}</Text>
        </View>
        {/* divider */}
        <View style={styles.horizontalLine}></View>
        {/* pictures */}
        <View style={styles.pictureContainer}>
          <FastImage style={styles.picture} source={{uri: item.pictures[0]}} />
          <FastImage style={[styles.picture, {marginHorizontal: 5}]} source={{uri: item.pictures[1]}} />
          <FastImage style={styles.picture} source={{uri: item.pictures[2]}} />
        </View>
        {/* divider */}
        <View style={styles.horizontalLine}></View>
        {/* content */}
        <Text style={styles.rowContent}>{item.desc}</Text>
        {/* interact area */}
        <View style={styles.interactContainer}>
          {/* like */}
          <View style={styles.interactItemContainer}>
            <Image style={styles.interactItemIcon} source={require('../../../res/icon/ic_common_like_off.png')}></Image>
            <Text style={styles.interactItemContent}>{item.like}</Text>
          </View>
          {/* shit */}
          <View style={styles.interactItemContainer}>
            <Image style={styles.interactItemIcon} source={require('../../../res/icon/ic_common_shit_off.png')}></Image>
            <Text style={styles.interactItemContent}>{item.shit}</Text>
          </View>
          {/* share */}
          <TouchableOpacity>
            <View style={styles.interactItemContainer}>
              <Image style={styles.interactItemIcon} source={require('../../../res/icon/ic_common_forward_off.png')}></Image>
              <Text style={styles.interactItemContent}>share</Text>
            </View>
          </TouchableOpacity>
          {/* comment */}
          <TouchableOpacity>
            <View style={styles.interactItemContainer}>
              <Image style={styles.interactItemIcon} source={require('../../../res/icon/ic_common_comment_off.png')}></Image>
              <Text style={styles.interactItemContent}>{item.comment}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderListFooter() {
    if(this.state.refreshing) {
      return null;
    }
    if(this.state.footerState == 1) {
      return (
        <View
          style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {I18n.t('pull_to_load_more')}
          </Text>
        </View>
      );
    }
    else if(this.state.footerState == 2) {
      return (
        <View
          style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {I18n.t('loading')}
          </Text>
        </View>
      );
    }
    else if(this.state.footerState == 3) {
      return (
        <View
          style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {I18n.t('no_more_data')}
          </Text>
        </View>
      );
    }
    else if(this.state.footerState == 4) {
      return (
        <View
          style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {I18n.t('load_more_failed')}
          </Text>
        </View>
      );
    }
  }

  _renderEmptyList() {
    if(this.state.refreshing) {
      return null;
    }
    if(this.state.tipType == 1) {
      return (
        <TouchableOpacity
          style={styles.tipContainer}
          onPress={() => this._onRefresh()}>
          <Text style={styles.tipText}>{I18n.t('network_exception_tip')}</Text>
        </TouchableOpacity>
      );
    }
    else if(this.state.tipType == 2) {
      return (
        <TouchableOpacity
          style={styles.tipContainer}
          onPress={() => this._onRefresh()}>
          <Text style={styles.tipText}>{I18n.t('no_data_tip')}</Text>
        </TouchableOpacity>
      );
    }
    else if(this.state.tipType == 3) {
      <TouchableOpacity
          style={styles.tipContainer}
          onPress={() => this._onRefresh()}>
          <Text style={styles.tipText}>{I18n.t('fetch_data_failed')}</Text>
        </TouchableOpacity>
    }
  }

  _onRefresh() {
    this._fetchData(0, this.pageSize);
  }

  _onLoadMore() {
    if(!this.state.refreshing && this.state.footerState != 2 && this.hasMore) {
      this.setState({footerState: 2});
      this._fetchData(this.index, this.pageSize);
    }
  }

  _keyExtractor = (item, index) => item.id;

  _fetchData(index, pageSize) {
    var delegate = this;
    DataApi.getFoodList(index, pageSize)
    .then(response => {
      if(response.code == 0) { // success
        delegate.total = response.data.total;
        delegate.hasMore = response.data.hasMore;
        delegate.index = index + response.data.pageSize;
        if(index == 0) { // refresh callback
          delegate.setState({refreshing: false});
          if(response.data.pageSize == 0) { // no data
            delegate.setState({tipType: 2});
          }
          else {
            delegate.setState({listData: response.data.data});
          }
        }
        else { // load more callback
          delegate.setState({listData: delegate.state.listData.concat(response.data.data)});
        }
        // footer
        if(response.data.data.hasMore) {
          delegate.setState({footerState: 1});
        }
        else {
          delegate.setState({footerState: 3});
        }
      }
      else { // error
        if(index == 0) { // refresh callback
          delegate.setState({tipType: 3});
          delegate.setState({refreshing: false});
        }
        else { // load more callback
          delegate.setState({footerState: 4});
        }
      }
    })
    .catch(error => { // network exception
      console.log(error);
      if(index == 0) { // refresh failed
        delegate.setState({refreshing: false});
        delegate.setState({tipType: 1});
      }
      else { // load more failed
        delegate.setState({footerState: 4});
      }
    });
  }
}

const styles = StyleSheet.create(
{
  rootContainer: {
    // flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column,
    backgroundColor: AppStyle.Color.Background,
  },
  tipContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column,
    justifyContent: SystemStyle.JustifyContent.Center,
    alignItems: SystemStyle.AlignItems.Center
  },
  tipText: {
    fontSize: AppStyle.TextSize.Medium
  },
  rowContainer: {
    flexDirection: SystemStyle.FlexDirection.Column,
    backgroundColor: AppStyle.Color.White,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  rowTitleContainer: {
    flexDirection: SystemStyle.FlexDirection.Row,
    justifyContent: SystemStyle.JustifyContent.SpaceBewteen
  },
  rowTitle: {
    fontSize: AppStyle.TextSize.Large,
    padding: 10,
    fontWeight: 'bold'
  },
  pictureContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Row,
    padding: 5
  },
  picture: {
    flex: 1,
    width: 100,
    height: 80
  },
  rowContent: {
    fontSize: AppStyle.TextSize.Small,
    padding: 10,
    lineHeight: 30
  },
  horizontalLine: {
    backgroundColor: AppStyle.Color.Background,
    height: 1
  },
  verticalLine: {
    backgroundColor: AppStyle.Color.Background,
    width: 1
  },
  interactContainer: {
    flexDirection: SystemStyle.FlexDirection.Row,
    justifyContent: SystemStyle.JustifyContent.SpaceBewteen,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 10
  },
  interactItemContainer: {
    flexDirection: SystemStyle.FlexDirection.Row,
    alignItems: SystemStyle.AlignItems.Center
  },
  interactItemIcon: {
    width: 20,
    height: 20
  },
  interactItemContent: {
    fontSize: AppStyle.TextSize.Small,
    color: AppStyle.Color.Gray,
    marginLeft: 5
  },
  footerContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Row,
    justifyContent: SystemStyle.JustifyContent.Center,
    alignItems: SystemStyle.AlignItems.Center,
    padding: 20
  },
  footerText: {
    fontSize: AppStyle.TextSize.Medium,
    color: AppStyle.Color.Gray
  }
});