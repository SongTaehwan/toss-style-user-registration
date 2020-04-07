import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { colors } from '@styles';
import { IconButtonProps } from './types';

const IconButton = ({
  icon,
  size = 32,
  color = colors.pallette.black,
  iconStyle,
  ...rest
}: IconButtonProps): JSX.Element => {
  return (
    <TouchableOpacity {...rest}>
      <Icon name={icon} size={size} color={color} style={iconStyle} />
    </TouchableOpacity>
  );
};

export default IconButton;
