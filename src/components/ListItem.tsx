import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { HorizontalView, Text } from '@components';

interface CheckbaleListItem {
  children: ReactNode;
}

const styles = StyleSheet.create({});

const CheckbaleListItem = ({ children }: CheckbaleListItem): JSX.Element => {
  return (
    <HorizontalView>
      {children || (
        <View>
          <Text></Text>
        </View>
      )}
    </HorizontalView>
  );
};

export default CheckbaleListItem;
