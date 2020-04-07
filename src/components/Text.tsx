import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import { typo, TypoTypes } from '@styles';

interface TextProps extends RNTextProps {
  children?: ReactNode;
  content?: string;
  style?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  defaultFontStyle: typo.getTextStyle(TypoTypes.normal),
});

const Text = ({
  children,
  content,
  style,
  ...rest
}: TextProps): JSX.Element => {
  return (
    <RNText style={[styles.defaultFontStyle, style]} {...rest}>
      {children || content}
    </RNText>
  );
};

export default Text;
