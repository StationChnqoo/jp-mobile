import {
  Dimensions,
  FlexStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

const F = 'F';
const f = (params: any) => {};
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  card: {
    // iOS 阴影
    shadowColor: '#333',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Android 阴影
    elevation: 1,
    backgroundColor: 'white',
  },
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

const Touchable = {
  OPACITY: 0.8,
  hitlop: (n?: number) => {
    let _n = n || 12;
    return {top: _n, bottom: _n, left: _n, right: _n};
  },
};

const scale = (n: number) => {
  return (WIDTH / 375) * n;
};

const Fonts = {
  NotoSansJP: 'NotoSansJP-Medium',
  NotoSerifJP: 'NotoSerifJP-Medium',
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
  FILL: styles.fill,
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
  CARD: styles.card,
};

const Links = {
  previewPdf: (url: string) =>
    `https://mozilla.github.io/pdf.js/web/viewer.html?file=${url}`,
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
  Time,
  Links,
};

export default x;
