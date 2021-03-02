import React from 'react';
import {View, StyleSheet} from 'react-native';
import {VARIABLES} from '../../constants/index';

export default function CardWrapper({children, ...props}) {
  return (
    <View style={styles.wrapper} blurRadius={1} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: VARIABLES.CARD,
    borderRadius: 14,
    overflow: 'hidden',
  },
});
