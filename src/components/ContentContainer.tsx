import { View, StyleSheet } from 'react-native';
import React from 'react';
import { ContentContainerProps } from './types';
import { layout } from '@styles';

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
