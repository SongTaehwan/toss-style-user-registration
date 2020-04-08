import { TextStyle } from 'react-native';

export type TypoType = 'title' | 'subTitle' | 'large' | 'normal' | 'small';

export enum TypoConst {
  title = 'title',
  subTitle = 'subTitle',
  large = 'large',
  normal = 'normal',
  small = 'small',
}

export type FontWeightTypes =
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

export enum FontWeightConst {
  normal = 'normal',
  bold = 'bold',
  _100 = '100',
  _200 = '200',
  _300 = '300',
  _400 = '400',
  _500 = '500',
  _600 = '600',
  _700 = '700',
  _800 = '900',
  _900 = '800',
}

export interface BasicTypo {
  [key: string]: TextStyle;
}
