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
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.moduleTouchableContainer} onPress={() => this._onDialectClick()}>
            <View style={styles.moduleContainer}>
              <Image style={styles.moduleIcon} source={require('../../../res/image/logo.png')}/>
              <Text style={styles.moduleTitle}>{I18n.t('dialect')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moduleTouchableContainer} onPress={() => this._onImpressionClick()}>
            <View style={styles.moduleContainer}>
              <Image style={styles.moduleIcon} source={require('../../../res/image/logo.png')}/>
              <Text style={styles.moduleTitle}>{I18n.t('impression')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moduleTouchableContainer}>
            <View style={styles.moduleContainer}>
              <Image style={styles.moduleIcon} source={require('../../../res/image/logo.png')}/>
              <Text style={styles.moduleTitle}>{I18n.t('dialect')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onDialectClick() {
    this.props.navigation.navigate(AppNav.Screen.Dialect);
  }

  _onImpressionClick() {
    this.props.navigation.navigate(AppNav.Screen.Impression);
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
    fontSize: AppStyle.TextSize.Medium,
    marginTop: 10
  }
}
);