import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import React from 'react';
import { layout } from '@styles';
import { ContainerProps } from './types';

const Container = ({
  topless = false,
  bottomless = false,
  style,
  ...props
}: ContainerProps): JSX.Element => {
  const viewStyle = StyleSheet.flatten([
    layout.container,
    topless && layout.topless,
    bottomless && layout.bottomless,
    style,
  ]);

  return (
    <SafeAreaView style={viewStyle} {...props}>
      {props.children}
    </SafeAreaView>
  );
};

export default Container;
