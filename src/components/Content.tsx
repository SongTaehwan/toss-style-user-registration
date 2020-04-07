import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { layout } from '@styles';

interface ContentProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

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
