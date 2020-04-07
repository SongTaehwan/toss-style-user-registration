import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { layout } from '@styles';

interface ContentContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  content: {
    ...layout.container,
    alignItems: 'center',
  },
});

const ContentContainer = ({
  children,
  style,
}: ContentContainerProps): JSX.Element => {
  return <View style={[styles.content, style]}>{children}</View>;
};

export default ContentContainer;
