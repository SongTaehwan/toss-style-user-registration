import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import { typo } from '@styles';
import { TypoConst } from '@styles/types';

interface TextProps extends RNTextProps {
  children?: ReactNode;
  content?: string;
  style?: StyleProp<TextStyle>;
  title?: boolean;
  subTitle?: boolean;
  large?: boolean;
  normal?: boolean;
  center?: boolean;
  right?: boolean;
  left?: boolean;
  color?: string;
}

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
        style,
        !!color && { color },
      ]}
      {...rest}>
      {children || content}
    </RNText>
  );
};

export default Text;
