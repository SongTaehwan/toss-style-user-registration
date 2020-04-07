import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { ReactNode } from 'react';
import {
  TouchableOpacityProps,
  TextStyle,
  StyleProp,
  ViewStyle,
  TextProps as RNTextProps,
} from 'react-native';

export interface SpaceProp {
  space?: number;
}

export interface TextButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  square?: boolean;
}

export interface ContainerProps extends SafeAreaViewProps {
  topless?: boolean;
  bottomless?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface ContentProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export interface ContentContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface HeroProps {
  containerStyle?: StyleProp<ViewStyle>;
  contentTextStyle?: StyleProp<TextStyle>;
  children?: ReactNode;
  contentText?: string;
}

export interface IconButtonProps extends TouchableOpacityProps {
  icon: string;
  size?: number;
  color?: string;
  iconStyle?: StyleProp<TextStyle>;
}

export interface TextProps extends RNTextProps {
  children?: ReactNode;
  content?: string;
  style?: StyleProp<TextStyle>;
  title?: boolean;
  subTitle?: boolean;
  large?: boolean;
  normal?: boolean;
  center?: boolean;
  right?: boolean;
  left?: boolean;
  color?: string;
}
