import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { HeroProps } from './types';
import { typo } from '@styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultContentStyle: {
    textAlign: 'center',
    ...typo.getTextStyle('title', 'bold'),
  },
});

const Hero = ({
  containerStyle,
  children,
  contentText,
  contentTextStyle,
}: HeroProps): JSX.Element => {
  return (
    <View style={[styles.container, containerStyle]}>
      {children || (
        <Text style={[styles.defaultContentStyle, contentTextStyle]}>
          {contentText}
        </Text>
      )}
    </View>
  );
};

export default Hero;
