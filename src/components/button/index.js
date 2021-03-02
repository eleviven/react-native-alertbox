import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Text from '../text/index';
import {VARIABLES} from '../../constants/index';

export default function Button({title, textWeight, ...props}) {
  const [isHover, setIsHover] = useState(false);
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
      style={styles.button(isHover)}
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

const styles = StyleSheet.create({
  button: (isHover) => ({
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: !isHover ? 'transparent' : VARIABLES.SYSTEM_GRAY,
  }),
});
