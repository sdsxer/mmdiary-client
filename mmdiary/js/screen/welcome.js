/**
 * @author leon
 */

import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet, 
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import AppStyle, { SystemStyle } from '../styles';
import AppNav from '../navigation';
import I18n from '../i18n/i18n'

const IMGS = [
  require('../../res/image/guide_0.jpg'),
  require('../../res/image/guide_1.jpg'),
  require('../../res/image/guide_2.jpg'),
  require('../../res/image/guide_3.jpg'),
  require('../../res/image/guide_4.jpg'),
  require('../../res/image/guide_5.jpg')
];

export default class WelcomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.rootContainer}>
        <Swiper style={styles.wrapper} showsButtons={false} loop={false} showsPagination={false}>
          <View style={styles.slide}>
            <Image style={styles.image} source={IMGS[0]}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={IMGS[1]}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={IMGS[2]}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={IMGS[3]}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={IMGS[4]}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={IMGS[5]}/>
            <TouchableOpacity style={{position:SystemStyle.Position.Absolute, bottom:50}} >
              <Text style={{color:AppStyle.Color.White, fontSize:AppStyle.TextSize.Large}} onPress={() => this._onClick()}>
                {I18n.t('startExpirence')}
              </Text>
            </TouchableOpacity>
          </View>
        </Swiper>
        <TouchableOpacity style={styles.jump}>
          <Text style={{color:AppStyle.Color.White, fontSize:AppStyle.TextSize.Medium}} onPress={() => this._onClick()}>
            {I18n.t('jump')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onClick() {
    this.props.navigation.navigate(AppNav.Screen.Login);
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: SystemStyle.FlexDirection.Row
  },
  jump: {
    position: SystemStyle.Position.Absolute,
    top: 50,
    right: 50
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: SystemStyle.JustifyContent.Center,
    alignItems: SystemStyle.AlignItems.Center,
    flexDirection: SystemStyle.FlexDirection.Row
  },
  image: {
    flex: 1
  }
});