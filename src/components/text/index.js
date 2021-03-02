import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import {TYPOGRAPHY, VARIABLES} from '../../constants';

export default function Text({color, size, weight, children, style, ...props}) {
  return (
    <RNText
      style={[
        styles.textColor(color),
        styles.textSize(size),
        styles.textWeight(weight),
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
}

Text.defaultProps = {
  color: 'LABEL',
  size: 'normal',
  weight: 'regular',
};

const styles = StyleSheet.create({
  textColor: (color) => ({
    color: VARIABLES[color],
  }),
  textSize: (size) => ({
    fontSize: TYPOGRAPHY.SIZES[size],
  }),
  textWeight: (weight) => ({
    fontWeight: TYPOGRAPHY.WEIGHTS[weight],
  }),
});
