import { ScrollView } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { ContentProps } from './types';
import { layout } from '@styles';

const styles = StyleSheet.create({
  wrapper: layout.container,
  contentStyle: {
    flexGrow: 1,
  },
});

const Content = ({
  containerStyle,
  contentContainerStyle,
  children,
}: ContentProps): JSX.Element => {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[styles.contentStyle, contentContainerStyle]}>
        {children}
      </ScrollView>
    </View>
  );
};

export default Content;
