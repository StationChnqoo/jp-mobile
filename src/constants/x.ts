import {
  Dimensions,
  FlexStyle,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

const F = 'F';
const f = (params: any) => {};
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const Touchable = {
  OPACITY: 0.9,
  hitlop: (n?: number) => {
    let _n = n || 12;
    return {top: _n, bottom: _n, left: _n, right: _n};
  },
};

const scale = (n: number) => {
  return (WIDTH / 375) * n;
};

const Fonts = {
  DOSIS: 'Dosis',
};

const Color = {
  PAGE: '#f0f0f0',
};

const Time = {
  HHmmss: (seconds: number) => {
    let h = Math.floor(seconds / 60 / 60);
    let m = Math.floor((seconds / 60) % 60);
    let s = Math.floor(seconds % 60);
    const withZero = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    return `${withZero(m)}:${withZero(s)}`;
  },
};
const Styles = {
  FILL: <ImageStyle | ViewStyle | any>{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  rowCenter: (justifyContent?: FlexStyle['justifyContent']) => {
    return <StyleProp<ViewStyle>>{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: justifyContent ?? 'space-between',
    };
  },
  circle: (n: number, backgroundColor: string) => {
    return <StyleProp<ViewStyle>>{
      borderRadius: n / 2,
      height: n,
      width: n,
      backgroundColor,
    };
  },
  CARD: <ViewStyle>{
    // iOS 阴影
    shadowColor: '#333',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    // Android 阴影
    elevation: 1,
    backgroundColor: 'white'
  },
};

const x = {
  F,
  f,
  HEIGHT,
  WIDTH,
  scale,
  Touchable,
  Fonts,
  Color,
  Styles,
  Time
};

export default x;
