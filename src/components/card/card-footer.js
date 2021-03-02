import React from 'react';
import {View, StyleSheet} from 'react-native';
import {VARIABLES} from '../../constants/index';

export default function CardFooter({children, ...props}) {
  return (
    <View style={styles.footer} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: VARIABLES.BORDER,
  },
});
