import { View, StyleSheet } from 'react-native';
import React from 'react';
import { HorizontalViewType, HorizontalViewProps } from './types';

const styles = StyleSheet.create({
  defaultStyle: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 28,
    paddingVertical: 16,
  },
});

const HorizontalView: HorizontalViewType = ({
  children,
  style,
  horizontalAlign = 'flex-start',
  verticalAlign = 'flex-start',
}: HorizontalViewProps): JSX.Element => {
  return (
    <View
      style={[
        styles.defaultStyle,
        style && style,
        { justifyContent: horizontalAlign, alignItems: verticalAlign },
      ]}>
      {children}
    </View>
  );
};

export default HorizontalView;
