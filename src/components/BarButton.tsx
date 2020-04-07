import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { TypoConst, FontWeightConst } from '@styles/types';
import { typo, colors } from '@styles';
import { ButtonProps } from './types';

const styles = StyleSheet.create({
  defaultContainerStyle: {
    width: '100%',
    paddingHorizontal: 24,
  },
  defaultButtonStyle: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderRadius: 12,
    backgroundColor: colors.pallette.blue,
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
  },
  defaultTitleStyle: typo.getTextStyle(
    TypoConst.subTitle,
    FontWeightConst._500,
    colors.pallette.white,
  ),
  disabledStyle: {
    backgroundColor: colors.pallette.grey,
  },
  square: {
    borderRadius: 0,
  },
});

const BarButton = ({
  children,
  title,
  titleStyle,
  buttonStyle,
  onPress,
  containerStyle,
  disabled,
  square,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <View style={[styles.defaultContainerStyle, containerStyle]}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.defaultButtonStyle,
          square && styles.square,
          buttonStyle,
          disabled && styles.disabledStyle,
        ]}
        onPress={onPress}
        {...rest}>
        {children || (
          <Text style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BarButton;
