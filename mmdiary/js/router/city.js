/**
 * @author leon
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import CityScreen from '../screen/city/city';
import I18n from '../i18n/i18n';

const CityRouter = StackNavigator(
{
  City: {
    screen: CityScreen,
    navigationOptions: {
      title: I18n.t('city')
    }
  },
},
{
  initialRouteName: 'City'
}
);

export default CityRouter;