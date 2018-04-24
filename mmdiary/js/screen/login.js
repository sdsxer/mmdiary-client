/**
 * @author leon
 */

import React, { Component } from 'react';
import { 
  Text,
  View,
  Image,
  StyleSheet, 
  TextInput, 
  TouchableOpacity
} from 'react-native';
import AppStyle, { SystemStyle, PlatformStyle } from '../styles';
import AppNav from '../navigation'
import I18n from '../i18n/i18n';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'sdsxleon',
      password: '123456'
    };
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        {/* logo */}
        <Image style={styles.logoImage} source={require('../../res/image/logo.png')}/>
        {/* account */}
        <View style={[styles.inputContainer, {marginTop:20}]}>
          <Image style={styles.prefixImage} source={require('../../res/image/login_account.png')}/>
          <TextInput
            placeholder={I18n.t('account')}
            value={this.state.username}
            style={styles.input}>
          </TextInput>
        </View>
        {/* separator */}
        <View style={styles.separatorLine}/>
        {/* password */}
        <View style={[styles.inputContainer, {marginTop:20}]}>
          <Image style={styles.prefixImage} source={require('../../res/image/login_password.png')}/>
          <TextInput
            secureTextEntry={true}
            placeholder={I18n.t('password')}
            value={this.state.password}
            style={styles.input}>
          </TextInput>
        </View>
        {/* separator */}
        <View style={styles.separatorLine}/>
        {/* forget password*/}
        <TouchableOpacity style={styles.forgetPasswordContainer}>
          <Text style={styles.forgetPassword}>
            {I18n.t('forgetPassword')}
          </Text>
        </TouchableOpacity>
        {/* register, login */}
        <View style={styles.controlContainer}>
          {/* login */}
          <TouchableOpacity style={styles.loginContainer} onPress={() => this._onLogin()}>
            <Text style={styles.login}>
              {I18n.t('login')}
            </Text>
          </TouchableOpacity>
          {/* register */}
          <TouchableOpacity style={styles.registerContainer} onPress={() => this._onRegister()}>
            <Text style={styles.register}>
              {I18n.t('register')}
            </Text>
          </TouchableOpacity>
        </View>
        {/* visitor */}
        <TouchableOpacity style={styles.visitorContainer}>
          <Text style={styles.visitor}>
            {I18n.t('visitorLogin')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onLogin() {
    this.props.navigation.navigate(AppNav.Screen.Tabs);
  }

  _onRegister() {

  }

  _onForgetPassword() {

  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: AppStyle.Color.WhiteSmoke,
    flexDirection: SystemStyle.FlexDirection.Column,
    alignItems: SystemStyle.AlignItems.Center
  },
  logoImage: {
    width: 80,
    height: 80,
    resizeMode: SystemStyle.ResizeMode.Stretch,
    marginTop: 120
  },
  inputContainer: {
    width: PlatformStyle.ScreenWidth - 80,
    flexDirection: SystemStyle.FlexDirection.Row,
    alignItems: SystemStyle.AlignItems.Center
  },
  prefixImage: {
    width: 20,
    height: 20,
    resizeMode: SystemStyle.ResizeMode.Stretch
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: AppStyle.TextSize.Large
  },
  separatorLine: {
    width: PlatformStyle.ScreenWidth - 80,
    height: 1,
    backgroundColor: AppStyle.Color.LightGray 
  },
  loginContainer: {
    flex: 1,
    backgroundColor: AppStyle.Color.Theme,
    borderRadius: 3,
    marginRight: 5
  },
  login: {
    fontSize: AppStyle.TextSize.Extra,
    color: AppStyle.Color.White,
    alignSelf: SystemStyle.AlignSelf.Center,
    paddingVertical: 10
  },
  registerContainer: {
    flex: 1,
    backgroundColor: AppStyle.Color.Gray,
    borderRadius: 3,
    marginLeft: 5
  },
  register: {
    fontSize: AppStyle.TextSize.Extra,
    color: AppStyle.Color.White,
    alignSelf: SystemStyle.AlignSelf.Center,
    paddingVertical: 10
  },
  forgetPasswordContainer: {
    alignSelf: SystemStyle.AlignSelf.FlexEnd,
    marginRight: 40,
    paddingVertical: 10
  },
  forgetPassword: {
    fontSize: AppStyle.TextSize.Small,
    color:AppStyle.Color.Gray
  },
  controlContainer: {
    width: PlatformStyle.ScreenWidth - 80,
    flexDirection: SystemStyle.FlexDirection.Row,
    marginTop: 10
  },
  visitorContainer: {
    position: SystemStyle.Position.Absolute, 
    bottom: 15
  },
  visitor: {
    fontSize: AppStyle.TextSize.Small,
    color:AppStyle.Color.Theme
  }
});