/**
 * @author leon
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import AppStyle, { SystemStyle, PlatformStyle } from '../../styles';
import I18n from '../../i18n/i18n';
import AppNav from '../../navigation';

export default class PlazaScreen extends React.Component {

  render() {
    return (
      <View style={styles.rootContainer}>
        {/* first row */}
        <View style={styles.rowContainer}>
          {/* dialect */}
          <TouchableOpacity style={styles.moduleTouchableContainer} onPress={() => this._onDialectClick()}>
            <View style={styles.moduleContainer}>
              <Image style={styles.moduleIcon} source={require('../../../res/image/logo.png')}/>
              <Text style={styles.moduleTitle}>{I18n.t('dialect')}</Text>
            </View>
          </TouchableOpacity>
          {/* impression */}
          <TouchableOpacity style={styles.moduleTouchableContainer} onPress={() => this._onImpressionClick()}>
            <View style={styles.moduleContainer}>
              <Image style={styles.moduleIcon} source={require('../../../res/image/logo.png')}/>
              <Text style={styles.moduleTitle}>{I18n.t('impression')}</Text>
            </View>
          </TouchableOpacity>
          {/* food */}
          <TouchableOpacity style={styles.moduleTouchableContainer} onPress={() => this._onFoodClick()}>
            <View style={styles.moduleContainer}>
              <Image style={styles.moduleIcon} source={require('../../../res/image/logo.png')}/>
              <Text style={styles.moduleTitle}>{I18n.t('food')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* second row */}
        <View style={styles.rowContainer}>
          {/* store */}
          <TouchableOpacity style={styles.moduleTouchableContainer} onPress={() => this._onStoreClick()}>
            <View style={styles.moduleContainer}>
              <Image style={styles.moduleIcon} source={require('../../../res/image/logo.png')}/>
              <Text style={styles.moduleTitle}>{I18n.t('store')}</Text>
            </View>
          </TouchableOpacity>
          {/* reserved */}
          <TouchableOpacity style={styles.moduleTouchableContainer}>
            
          </TouchableOpacity>
          {/* reserved */}
          <TouchableOpacity style={styles.moduleTouchableContainer}>

          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onDialectClick() {
    this.props.navigation.navigate(AppNav.Screen.Dialect);
  }

  _onFoodClick() {
    this.props.navigation.navigate(AppNav.Screen.Food);
  }

  _onImpressionClick() {
    this.props.navigation.navigate(AppNav.Screen.Impression);
  }

  _onStoreClick() {
    this.props.navigation.navigate(AppNav.Screen.Store);
  }
}

const styles = StyleSheet.create(
{
  rootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Column
  },
  rowContainer: {
    flexDirection: SystemStyle.FlexDirection.Row
  },
  moduleTouchableContainer: {
    flex: 1
  },
  moduleContainer: {
    flexDirection: SystemStyle.FlexDirection.Column,
    alignItems: SystemStyle.AlignItems.Center,
    padding: 20
  },
  moduleIcon: {
    width: 80,
    height: 80
  },
  moduleTitle: {
    fontSize: AppStyle.TextSize.Small,
    marginTop: 10
  }
}
);