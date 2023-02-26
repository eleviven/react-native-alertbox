import React from "react";
import { StyleSheet, TextInput as RNTextInput } from "react-native";
import { VARIABLES } from "../../constants/index";

export default function TextInput({ ...props }) {
  return <RNTextInput style={styles.element} {...props} />;
}

const styles = StyleSheet.create({
  element: {
    backgroundColor: VARIABLES.TEXT_INPUT,
    borderColor: VARIABLES.BORDER,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 0,
    height: 40,
  },
});
