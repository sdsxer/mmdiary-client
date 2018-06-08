/**
 * @author leon
 */

import React from 'react';
import { 
  Text,
  View,
  Image,
  Alert,
  StyleSheet, 
  TextInput,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import AppStyle, { SystemStyle, PlatformStyle } from '../styles';
import AppNav from '../navigation'
import I18n from '../i18n/i18n';
import CommonUtils from '../utils/common-utils';
import DataApi from '../utils/data-api';
import Toast, { DURATION } from 'react-native-easy-toast';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.account = '18810789600',
    this.password = '123456',
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    
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
            onChangeText={(text) => this._onAccountChangeText(text)}
            placeholder={I18n.t('mobile')}
            value={this.account}
            style={styles.input}>
          </TextInput>
        </View>
        {/* separator */}
        <View style={styles.separatorLine}/>
        {/* password */}
        <View style={[styles.inputContainer, {marginTop:20}]}>
          <Image style={styles.prefixImage} source={require('../../res/image/login_password.png')}/>
          <TextInput
            onChangeText={(text) => this._onPasswordChangeText(text)}
            secureTextEntry={true}
            placeholder={I18n.t('password')}
            value={this.password}
            style={styles.input}>
          </TextInput>
        </View>
        {/* separator */}
        <View style={styles.separatorLine}/>
        {/* forget password */}
        <TouchableOpacity style={styles.forgetPasswordContainer}>
          <Text style={styles.forgetPassword}>
            {I18n.t('forgetPassword')}
          </Text>
        </TouchableOpacity>
        {/* register & login */}
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
        {/* visitor login */}
        <TouchableOpacity style={styles.visitorContainer}>
          <Text style={styles.visitor}>
            {I18n.t('visitorLogin')}
          </Text>
        </TouchableOpacity>
        {/* loading bar */}
        <ActivityIndicator
          animating={this.state.loading}>
        </ActivityIndicator> 
        {/* toast */}  
        <Toast 
          ref="toast"
          position='bottom'
          positionValue={200}>
        </Toast>
      </View>
    );
  }

  _onLogin() {
    // input verify
    if(this.account == '') {
      this.refs.toast.show(I18n.t('mobile_should_not_be_empty'), DURATION.LENGTH_LONG);
      return;
    }
    if(!CommonUtils.isValidMobile(this.account)) {
      this.refs.toast.show(I18n.t('incorrect_mobile'), DURATION.LENGTH_LONG);
      return;
    }
    if(this.password == '') {
      this.refs.toast.show(I18n.t('password_should_not_be_empty'), DURATION.LENGTH_LONG);
      return;
    }
    // send login request
    this.setState({loading: true});
    var delegate = this;
    DataApi.login(this.account, this.password)
    .then(response => {
      delegate.setState({loading: false});
      delegate.props.navigation.navigate(AppNav.Screen.Tabs);
    })
    .catch(error => {
      delegate.setState({loading: false});
      Alert.alert(error.message, '',
        [
          {text: I18n.t('OK')}
        ]
      );
    });
  }

  _onRegister() {

  }

  _onAccountChangeText(text) {
    this.account = text;
  }

  _onPasswordChangeText(text) {
    this.password = text;
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