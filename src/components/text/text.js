import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import {TYPOGRAPHY, VARIABLES} from '../../constants/index';

export default function Text({color = 'LABEL', size = 'normal', weight = 'regular', children, style, ...props}) {
  const styles = stylesRef({color, size, weight});
  return (
    <RNText
      style={[styles.textColor, styles.textSize, styles.textWeight, style]}
      {...props}>
      {children}
    </RNText>
  );
}

const stylesRef = ({color, size, weight}) =>
  StyleSheet.create({
    textColor: {
      color: VARIABLES[color],
    },
    textSize: {
      fontSize: TYPOGRAPHY.SIZES[size],
    },
    textWeight: {
      fontWeight: TYPOGRAPHY.WEIGHTS[weight],
    },
  });
