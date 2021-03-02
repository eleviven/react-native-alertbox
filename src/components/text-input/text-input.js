import React from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';
import {VARIABLES} from '../../constants/index';

export default function TextInput({placeholder, onChangeText}) {
  return (
    <RNTextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.element}
    />
  );
}

const styles = StyleSheet.create({
  element: {
    backgroundColor: VARIABLES.TEXT_INPUT,
    borderWidth: 1,
    borderColor: VARIABLES.BORDER,
    padding: 10,
    borderRadius: 8,
  },
});
