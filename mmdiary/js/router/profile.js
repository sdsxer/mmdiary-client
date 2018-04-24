/**
 * @author leon
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../screen/profile/profile';
import I18n from '../i18n/i18n';

const ProfileRouter = StackNavigator(
{
  Profile: { 
    screen: ProfileScreen,
    navigationOptions: {
      title: I18n.t('profile')
    }
  }
},
{
  initialRouteName: 'Profile'
}
);

export default ProfileRouter;