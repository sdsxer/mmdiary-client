/**
 * @author leon
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './screen/welcome';
import RegisterScreen from './screen/register';
import LoginScreen from './screen/login';
import AppNav from './navigation';
import TabsRounter from './router/tabs';
import NewsScreen from './screen/dynamics/news';
import NewsDetailScreen from './screen/dynamics/news-detail';
import StoryScreen from './screen/dynamics/story';
import StoryDetailScreen from './screen/dynamics/story-detail';
import DialectScreen from './screen/plaza/dialect';
import ImpressionScreen from './screen/plaza/impression';

import I18n from './i18n/i18n';

const App = StackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: { header: false }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: { header: false }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: { header: false }
    },
    Tabs: {
      screen: TabsRounter,
      navigationOptions: { header: false }
    },
    News: {
      screen: NewsScreen,
      navigationOptions: {
        title: I18n.t('News'),
        headerBackTitle: I18n.t('dynamics')
      }
    },
    NewsDetail: {
      screen: NewsDetailScreen,
      navigationOptions: {
        title: I18n.t('News')
      }
    },
    Story: {
      screen: StoryScreen,
      navigationOptions: {
        title: I18n.t('Story'),
        headerBackTitle: I18n.t('dynamics')
      }
    },
    StoryDetail: {
      screen: StoryDetailScreen,
      navigationOptions: {
        title: I18n.t('Story')
      }
    },
    Dialect: {
      screen: DialectScreen,
      navigationOptions: {
        title: I18n.t('dialect')
      }
    },
    Impression: {
      screen: ImpressionScreen,
      navigationOptions: {
        title: I18n.t('impression')
      }
    },
  },
  {
    initialRouteName: getInitialRouteName()
  }
);

function getInitialRouteName() {
  return AppNav.Screen.Login;
}

SplashScreen.hide();

export default App;

const styles = StyleSheet.create({
  
});
