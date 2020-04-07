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

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
