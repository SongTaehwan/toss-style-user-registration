import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { layout } from '@styles';

interface ContentContainerProps {
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

const ContentContainer = ({
  containerStyle,
  contentContainerStyle,
  children,
}: ContentContainerProps): JSX.Element => {
  const ContentContainerStyle = StyleSheet.flatten([
    containerStyle,
    styles.wrapper,
  ]);

  const scrollContentContainerStyle = StyleSheet.flatten([
    contentContainerStyle,
    styles.contentStyle,
  ]);

  return (
    <View style={ContentContainerStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={scrollContentContainerStyle}>
        {children}
      </ScrollView>
    </View>
  );
};

export default ContentContainer;
