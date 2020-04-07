import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { layout } from '@styles';

interface ContentProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  content: {
    ...layout.container,
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 40,
  },
});

const Content = ({ children, style }: ContentProps): JSX.Element => {
  return <View style={[styles.content, style]}>{children}</View>;
};

export default Content;
