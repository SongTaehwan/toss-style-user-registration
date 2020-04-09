import { StyleSheet } from 'react-native';
import React from 'react';
import { HorizontalView, Checkbox, Text } from '@components';
import { CheckableListItemProps } from './types';

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
  onPressCheckbox,
  TextComponent,
  ...rest
}: CheckableListItemProps): JSX.Element => {
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
              onPressCheckbox={onPressCheckbox}
              {...rest}
            />
          )}
        </>
      )}
    </HorizontalView>
  );
};

export default CheckbaleListItem;
