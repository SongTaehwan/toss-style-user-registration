import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { IconProps } from './types';

const styles = StyleSheet.create({
  containerStye: {
    width: 24,
    height: 24,
  },
  default: {
    width: '100%',
    height: '100%',
  },
});

const Icon = ({
  containerStyle,
  iconStyle,
  source,
  ...rest
}: IconProps): JSX.Element => {
  return (
    <View style={[styles.containerStye, containerStyle]}>
      <Image source={source} {...rest} style={[styles.default, iconStyle]} />
    </View>
  );
};

export default Icon;
