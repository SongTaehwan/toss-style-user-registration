import React, { useState } from 'react';
import { View, Text, TextInputProps, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
  label: string;
}

const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    width: '100%',
    paddingHorizontal: 24,
  },
  defaultInput: {
    paddingHorizontal: 8,
    paddingBottom: 12,
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
});

const Input = ({ label, ...rest }: InputProps): JSX.Element => {
  const [isFocus, setFocus] = useState(false);

  const handleOnFocus = () => setFocus(true);
  const handleOnBlur = () => setFocus(false);

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.defaultInput}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
    </View>
  );
};

export default Input;
