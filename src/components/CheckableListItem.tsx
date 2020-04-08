import { StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { HorizontalView, Checkbox, Text } from '@components';
import { CheckboxProps } from './types';

interface CheckbaleListItemProps extends CheckboxProps {
  children?: ReactNode;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  checkbox?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  checkboxContainerStyle?: StyleProp<ViewStyle>;
  TextComponent?: React.ReactNode;
}

const styles = StyleSheet.create({
  defaultContainer: {
    height: 50,
    paddingRight: 24,
  },
  defaultFont: {
    flex: 1,
  },
});

const CheckbaleListItem = ({
  children,
  title,
  titleStyle,
  containerStyle,
  checkboxContainerStyle,
  checkbox = true,
  checked,
  TextComponent,
  ...rest
}: CheckbaleListItemProps): JSX.Element => {
  return (
    <HorizontalView
      style={[styles.defaultContainer, containerStyle]}
      verticalAlign={'center'}>
      {children || (
        <>
          {TextComponent ? (
            TextComponent
          ) : (
            <Text
              normal
              content={title}
              style={[styles.defaultFont, titleStyle]}
            />
          )}
          {checkbox && (
            <Checkbox
              checked={checked}
              containerStyle={checkboxContainerStyle}
              {...rest}
            />
          )}
        </>
      )}
    </HorizontalView>
  );
};

export default CheckbaleListItem;
