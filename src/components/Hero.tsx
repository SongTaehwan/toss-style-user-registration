import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import { typo } from '@styles';

interface HeroProps {
  containerStyle?: StyleProp<ViewStyle>;
  contentTextStyle?: StyleProp<TextStyle>;
  children?: ReactNode;
  contentText?: string;
}

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
