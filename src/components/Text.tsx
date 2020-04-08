import { Text as RNText, StyleSheet } from 'react-native';
import React from 'react';
import { typo } from '@styles';
import { TypoConst } from '@styles/types';
import { TextProps } from './types';

const styles = StyleSheet.create({
  defaultFontStyle: typo.getTextStyle(),
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  bold: {
    fontWeight: 'bold',
  },
});

const Text = ({
  children,
  content,
  style,
  title,
  subTitle,
  large,
  normal,
  center,
  right,
  left,
  bold,
  color,
  ...rest
}: TextProps): JSX.Element => {
  return (
    <RNText
      style={[
        styles.defaultFontStyle,
        title && typo.getTextStyle(TypoConst.title, 'bold'),
        subTitle && typo.getTextStyle(TypoConst.subTitle),
        large && typo.getTextStyle(TypoConst.large),
        normal && typo.getTextStyle(TypoConst.normal),
        center && styles.center,
        left && styles.left,
        right && styles.right,
        bold && styles.bold,
        style,
        !!color && { color },
      ]}
      {...rest}>
      {children || content}
    </RNText>
  );
};

export default Text;
