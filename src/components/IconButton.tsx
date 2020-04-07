import { TouchableOpacityProps, StyleProp, TextStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { colors } from '@styles';

interface IconButtonProps extends TouchableOpacityProps {
  icon: string;
  size?: number;
  color?: string;
  iconStyle?: StyleProp<TextStyle>;
}

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
