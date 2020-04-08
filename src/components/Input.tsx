import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInputProps,
  StyleSheet,
  Animated,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { pallette } from '@styles/colors';

interface InputProps extends TextInputProps {
  label?: string;
  inputStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    height: Platform.OS === 'ios' ? 56 : 63,
    width: '100%',
    paddingHorizontal: 24,
  },
  defaultInput: {
    paddingHorizontal: 8,
    paddingBottom: 12,
    fontSize: 16,
    color: pallette.grey,
    borderBottomWidth: 1,
    borderBottomColor: pallette.grey,
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: pallette.blue,
    color: pallette.black,
  },
  fontInActive: {
    color: pallette.grey,
  },
});

const Input = ({
  inputRef,
  value,
  label,
  inputStyle,
  containerStyle,
  ...rest
}: InputProps): JSX.Element => {
  const focusAnimation = useRef(new Animated.Value(value === '' ? 0 : 1))
    .current;
  const [isFocused, setFocus] = useState(false);

  const handleOnFocus = () => setFocus(true);
  const handleOnBlur = () => setFocus(false);

  useEffect(() => {
    Animated.timing(focusAnimation, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, focusAnimation, value]);

  const labelStyle = {
    position: 'absolute',
    left: 32,
    top: focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0],
    }),
    fontSize: focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [pallette.grey, pallette.blue],
    }),
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Animated.Text
          style={[
            labelStyle,
            !isFocused && value !== '' && styles.fontInActive,
          ]}>
          {label}
        </Animated.Text>
      )}
      <TextInput
        ref={inputRef}
        value={value}
        selectionColor={'black'}
        style={[styles.defaultInput, isFocused && styles.active, inputStyle]}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
    </View>
  );
};

export default Input;
