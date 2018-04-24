/**
 * @author leon
 */

import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStyle from '../styles';
import DynamicsRouter from './dynamics';
import PlazaRouter from './plaza';
import CityRouter from './city';
import ProfileRouter from './profile';

const TabsRounter = TabNavigator(
{
  Dynamics: { screen: DynamicsRouter },
  Plaza: { screen: PlazaRouter },
  Profile: { screen: ProfileRouter }
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Dynamics') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } 
      else if (routeName === 'Plaza') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }
      else if(routeName === 'City') {
        iconName = `ios-alarm${focused ? '' : '-outline'}`;
      }
      else if(routeName === 'Profile') {
        iconName = `ios-alarm${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: AppStyle.Color.Theme,
    inactiveTintColor: AppStyle.Color.Gray,
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
}
);

export default TabsRounter;