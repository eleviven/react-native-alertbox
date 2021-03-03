import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
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
  const behavior = Platform.select({ios: 'padding', android: 'height'});
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
    <KeyboardAvoidingView style={styles.keyboardWrapper} behavior={behavior}>
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
            {fields?.length > 0 && (
              <View style={styles.fieldsWrapper}>
                {fields.map((field, index) => (
                  <View
                    key={index}
                    style={{
                      marginBottom: fields.length - 1 !== index ? 10 : 0,
                    }}>
                    <TextInput
                      name={field.name}
                      placeholder={field.placeholder}
                      onChangeText={(text) =>
                        setFieldState((prevState) => ({
                          ...prevState,
                          [field.name]: text,
                        }))
                      }
                      autoFocus={index === 0}
                    />
                  </View>
                ))}
              </View>
            )}
            <Card.Footer>
              {actions ? (
                actions.map((action, index) => (
                  <View
                    key={index}
                    style={[
                      styles.buttonItem,
                      {borderRightWidth: actions.length - 1 !== index ? 1 : 0},
                    ]}>
                    <Button
                      title={action.text}
                      onPress={() => handleClose(action.onPress)}
                      textWeight={
                        action.style === 'cancel' ? 'bold' : 'regular'
                      }
                    />
                  </View>
                ))
              ) : (
                <View style={styles.buttonItem}>
                  <Button
                    title="Close"
                    onPress={handleClose}
                    textWeight="bold"
                  />
                </View>
              )}
            </Card.Footer>
          </Card.Wrapper>
        </Animated.View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardWrapper: {
    position: 'absolute',
    zIndex: 9,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  wrapper: {
    backgroundColor: VARIABLES.OVERLAY,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: SCREEN_WIDTH * 0.67,
    maxWidth: 350,
  },
  paragraph: {
    marginTop: 5,
    textAlign: 'center',
  },
  buttonItem: {
    flex: 1,
    borderRightWidth: 0,
    borderRightColor: VARIABLES.BORDER,
  },
  fieldsWrapper: {
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
});
