import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { ReactNode, FC } from 'react';
import {
  TouchableOpacityProps,
  TextStyle,
  StyleProp,
  ViewStyle,
  TextProps as RNTextProps,
  FlexAlignType,
  ImageStyle,
  ModalProps,
  ImageProps,
} from 'react-native';

export interface SpaceProp {
  space?: number;
}

export interface TextButtonProps extends TouchableOpacityProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
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
  small?: boolean;
  center?: boolean;
  right?: boolean;
  left?: boolean;
  color?: string;
  bold?: boolean;
}

export type TextType = FC<TextProps>;

type YAxiosFlexAlignType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface HorizontalViewProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  horizontalAlign?: YAxiosFlexAlignType;
  verticalAlign?: FlexAlignType;
}

export type HorizontalViewType = FC<HorizontalViewProps>;

export interface CheckboxProps extends TouchableOpacityProps {
  value?: string;
  checked: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  iconImageStyle?: StyleProp<ImageStyle>;
  checkedIcon?: 'checked' | 'checked_large';
  unCheckedIcon?: 'unchecked' | 'unchecked_large';
  onPressCheckbox?: (value: string, checked: boolean) => void;
}

export interface BottomSheetProps extends ModalProps {
  isVisible: boolean;
  modalStyle?: StyleProp<ViewStyle>;
  close?: () => void;
  onPress?: (provider: string) => void;
}

export interface CheckableListItemProps extends CheckboxProps {
  children?: ReactNode;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  checkbox?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  checkboxContainerStyle?: StyleProp<ViewStyle>;
  TextComponent?: React.ReactNode;
}

export interface IconProps extends ImageProps {
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

export interface PermissionListItemType {
  title: string;
  subTitle: string;
  iconName?: 'bell' | 'phone';
  contentStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export interface PickerProps {
  label?: string;
  value?: string;
  autoFocus?: boolean;
}
