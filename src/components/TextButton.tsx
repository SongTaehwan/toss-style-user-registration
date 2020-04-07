import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { TypoConst } from '@styles/types';
import { TextButtonProps } from './types';
import { typo } from '@styles';

const styles = StyleSheet.create({
  textStyle: {
    ...typo.getTextStyle(TypoConst.large),
    textDecorationLine: 'underline',
  },
});

const TextButton = ({
  text = 'buttonText',
  textStyle,
  children,
  ...props
}: TextButtonProps): JSX.Element => {
  const buttonTextStyle = StyleSheet.flatten([styles.textStyle, textStyle]);

  return (
    <TouchableOpacity {...props}>
      {children || <Text style={buttonTextStyle}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default TextButton;
