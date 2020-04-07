import React, { ReactNode } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  StyleProp,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TypoConst } from '@styles/types';
import { typo } from '@styles';

interface TextButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}

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
