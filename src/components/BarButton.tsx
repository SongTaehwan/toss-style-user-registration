import React, { ReactNode } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { typo } from '@styles';
import { TypoTypes } from '@styleTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  children?: ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  defaultButtonStyle: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderRadius: 12,
  },
  defaultTitleStyle: typo.getTextStyle(TypoTypes.title, true),
});

const BarButton = ({
  children,
  title,
  titleStyle,
  buttonStyle,
  onPress,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.defaultButtonStyle, buttonStyle]}
      onPress={onPress}
      {...rest}>
      {children || (
        <Text style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default BarButton;
