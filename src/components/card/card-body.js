import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function CardBody({children, ...props}) {
  return (
    <View style={styles.body} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
