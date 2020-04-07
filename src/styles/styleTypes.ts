import { TextStyle } from 'react-native';

export enum TypoTypes {
  title,
  subTitle,
  large,
  normal,
}

export interface BasicTypo {
  [key: string]: TextStyle;
}
