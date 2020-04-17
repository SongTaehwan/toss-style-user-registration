import { View, StyleSheet } from 'react-native';
import React from 'react';
import { HorizontalView, Text, Icon, HSpace, VSpace } from '@components';
import { PermissionListItemType } from './types';
import { pallette } from '@styles/colors';

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 32,
    paddingVertical: 0,
  },
  content: {
    flex: 1,
  },
});

const PermissionListItem = ({
  iconName = 'bell',
  title,
  subTitle,
  contentStyle,
  children,
}: PermissionListItemType): JSX.Element => {
  return (
    <HorizontalView style={styles.containerStyle}>
      {children || (
        <>
          <Icon source={{ uri: iconName }} />
          <HSpace space={8} />
          <View style={[styles.content, contentStyle]}>
            <Text large bold>
              {title}
            </Text>
            <VSpace space={6} />
            <Text normal color={pallette.grey}>
              {subTitle}
            </Text>
          </View>
        </>
      )}
    </HorizontalView>
  );
};

export default PermissionListItem;
