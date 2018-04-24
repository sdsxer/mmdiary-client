/**
 * @author leon
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import DynamicsScreen from '../screen/dynamics/dynamics';
import I18n from '../i18n/i18n';

const DynamicsRouter = StackNavigator(
{
  Dynamics: {
    screen: DynamicsScreen,
    navigationOptions: {
      title: I18n.t('dynamics')
    }
  },
},
{
  initialRouteName: 'Dynamics'
}
);

export default DynamicsRouter;