import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { TypoConst } from '@styles/types';
import { TextButtonProps } from './types';
import { typo } from '@styles';

const styles = StyleSheet.create({
  textStyle: {
    ...typo.getTextStyle(TypoConst.large),
    textDecorationLine: 'underline',
  },
});

const TextButton: FC<TextButtonProps> = ({
  title = 'buttonText',
  textStyle,
  children,
  containerStyle,
  ...props
}: TextButtonProps): JSX.Element => {
  const buttonTextStyle = StyleSheet.flatten([styles.textStyle, textStyle]);

  return (
    <TouchableOpacity {...props} containerStyle={containerStyle}>
      {children || <Text style={buttonTextStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default TextButton;
