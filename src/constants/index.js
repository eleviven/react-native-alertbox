import {Dimensions, PlatformColor, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const VARIABLES = {
  CARD: Platform.select({ios: 'rgba(242, 242, 242, 1)'}),
  OVERLAY: 'rgba(0, 0, 0, 0.15)',
  BORDER: 'rgba(60, 60, 67, 0.3)',
  TEXT_INPUT: 'rgba(255, 255, 255, 1)',
  LABEL: PlatformColor('label'),
  SYSTEM_BLUE: PlatformColor('systemBlue'),
  SYSTEM_GRAY: PlatformColor('systemGray4'),
};

export const TYPOGRAPHY = {
  SIZES: {
    small: 13,
    normal: 17,
    large: 20,
  },
  WEIGHTS: {
    regular: '400',
    semibold: '500',
    bold: '600',
  },
};
