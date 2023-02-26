import React, {useState} from 'react';
import {Pressable, StyleSheet, Platform} from 'react-native';
import Text from '../text/text';
import {VARIABLES} from '../../constants/index';

export default function Button({title, textWeight, ...props}) {
  const [isHover, setIsHover] = useState(false);
  const styles = stylesRef({isHover});
  const onPressIn = () => {
    setIsHover(true);
  };
  const onPressOut = () => {
    setIsHover(false);
  };
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.button, Platform.OS === 'web' && {cursor: 'pointer'}]}
      {...props}>
      <Text color="SYSTEM_BLUE" weight={textWeight}>
        {title}
      </Text>
    </Pressable>
  );
}

Button.defaultProps = {
  textWeight: 'black',
};

const stylesRef = ({isHover}) =>
  StyleSheet.create({
    button: {
      height: 46,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: !isHover ? 'transparent' : VARIABLES.SYSTEM_GRAY,
    },
  });
