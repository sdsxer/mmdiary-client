/**
 * @author leon
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import PlazaScreen from '../screen/plaza/plaza';
import I18n from '../i18n/i18n';

const PlazaRouter = StackNavigator(
{
  Plaza: { 
    screen: PlazaScreen,
    navigationOptions: {
      title: I18n.t('plaza')
    }
  }
},
{
  initialRouteName: 'Plaza'
}
);

export default PlazaRouter;