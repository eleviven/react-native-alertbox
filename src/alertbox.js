import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Button from './components/button';
import Card from './components/card/index';
import Text from './components/text/index';
import TextInput from './components/text-input/text-input';
import {SCREEN_WIDTH, VARIABLES} from './constants/index';

export default function Alertbox({
  title,
  paragraph,
  actions,
  fields,
  dispatchRemove,
}) {
  const [fieldState, setFieldState] = useState({});

  const animatedValue = useRef(new Animated.Value(0)).current;
  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.1, 1],
  });

  const handleClose = (action) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      dispatchRemove();
      if (action && typeof action === 'function') {
        action(fieldState);
      }
    });
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);
  return (
    <Animated.View style={[styles.wrapper, {opacity}]}>
      <Animated.View style={[styles.inner, {transform: [{scale}]}]}>
        <Card.Wrapper>
          <Card.Body>
            {title && <Text weight="bold">{title}</Text>}
            {paragraph && (
              <Text size="small" style={styles.paragraph}>
                {paragraph}
              </Text>
            )}
          </Card.Body>
          {fields && (
            <View style={styles.fieldsWrapper}>
              {fields.map((field, index) => (
                <TextInput
                  key={index}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChangeText={(text) =>
                    setFieldState((prevState) => ({
                      ...prevState,
                      [field.name]: text,
                    }))
                  }
                />
              ))}
            </View>
          )}
          <Card.Footer>
            {actions ? (
              actions.map((action, index) => (
                <View
                  key={index}
                  style={styles.buttonItem(actions.length - 1 !== index)}>
                  <Button
                    title={action.text}
                    onPress={() => handleClose(action.onPress)}
                    textWeight={action.style === 'cancel' ? 'bold' : 'regular'}
                  />
                </View>
              ))
            ) : (
              <View style={styles.buttonItem(false)}>
                <Button title="Close" onPress={handleClose} textWeight="bold" />
              </View>
            )}
          </Card.Footer>
        </Card.Wrapper>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VARIABLES.OVERLAY,
  },
  inner: {
    width: SCREEN_WIDTH * 0.67,
  },
  paragraph: {
    marginTop: 5,
    textAlign: 'center',
  },
  buttonItem: (border) => ({
    flex: 1,
    borderRightWidth: border ? 1 : 0,
    borderRightColor: VARIABLES.BORDER,
  }),
  fieldsWrapper: {
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
});
