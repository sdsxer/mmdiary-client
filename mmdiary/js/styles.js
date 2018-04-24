/**
 * @author leon
 */

import { Platform, Dimensions } from 'react-native';

const AppStyle = {
  TextSize: {
    Extra: 20,
    Large: 18,
    Medium: 16,
    Small: 14,
    Tiny: 12
  },
  Color: {
    Theme: '#1BA1E2',
    Background: '#F3F3F3',
    White: 'white',
    Black: 'black',
    Silver: 'silver',
    Gray: 'gray',
    DarkGray: 'darkgrey',
    LightGray: 'lightgray',
    WhiteSmoke: 'whitesmoke'
  }
}

export const SystemStyle = {
  FlexDirection: {
    Row: 'row',
    Column: 'column'
  },
  FlexWrap: {
    Wrap: 'wrap',
    NoWrap: 'nowrap'
  },
  JustifyContent: {
    FlexStart: 'flex-start',
    Center: 'center',
    FlexEnd: 'flex-end',
    SpaceAround: 'space-around',
    SpaceBewteen: 'space-between',
    SpaceEvenly: 'space-evenly'
  },
  AlignItems: {
    FlexStart: 'flex-start',
    Center: 'center',
    FlexEnd: 'flex-end',
    Stretch: 'stretch'
  },
  AlignSelf: {
    Auto: 'auto',
    FlexStart: 'flex-start',
    FlexEnd: 'flex-end',
    Center: 'center',
    Stretch: 'stretch'
  },
  Position: {
    Relative: 'relative',
    Absolute: 'absolute'
  },
  ResizeMode: {
    Cover: 'cover',
    Contain: 'contain',
    Stretch: 'stretch'
  },
  OverFlow: {
    Hidden: 'hidden'
  }
}

const window = Dimensions.get('window');

export const PlatformStyle = {
  ScreenWidth: window.width,
  ScreenHeight: window.height
}

export default AppStyle;