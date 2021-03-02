import {Dimensions, PlatformColor, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const VARIABLES = {
  CARD: Platform.select({
    ios: 'rgba(242, 242, 242, 1)',
    android: 'rgba(242, 242, 242, 1)',
  }),
  OVERLAY: 'rgba(0, 0, 0, 0.2)',
  BORDER: 'rgba(60, 60, 67, 0.3)',
  TEXT_INPUT: 'rgba(255, 255, 255, 1)',
  LABEL: Platform.select({
    ios: PlatformColor('label'),
    android: PlatformColor('@android:color/black'),
  }),
  SYSTEM_BLUE: Platform.select({
    ios: PlatformColor('systemBlue'),
    android: 'rgb(0, 122, 255)',
  }),
  SYSTEM_GRAY: Platform.select({
    ios: PlatformColor('systemGray4'),
    android: 'rgb(209, 209, 214)',
  }),
};

export const TYPOGRAPHY = {
  SIZES: {
    small: 13,
    normal: Platform.select({ios: 17, android: 16}),
    large: 20,
  },
  WEIGHTS: {
    regular: '400',
    semibold: '500',
    bold: '600',
  },
};
