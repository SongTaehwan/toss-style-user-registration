import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckboxProps } from './types';

const styles = StyleSheet.create({
  defaultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
  defaultImage: {
    width: '100%',
    height: '100%',
  },
});

const Checkbox = ({
  value,
  checked = false,
  containerStyle,
  iconImageStyle,
  checkedIcon = 'checked',
  unCheckedIcon = 'unchecked',
  onPressCheckbox,
  ...rest
}: CheckboxProps): JSX.Element => {
  const handler = () => {
    if (onPressCheckbox) {
      onPressCheckbox(value || '', checked);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.defaultContainer, containerStyle]}
      onPress={handler}
      {...rest}>
      <Image
        style={[styles.defaultImage, iconImageStyle]}
        source={{ uri: checked ? checkedIcon : unCheckedIcon }}
      />
    </TouchableOpacity>
  );
};

export default Checkbox;
