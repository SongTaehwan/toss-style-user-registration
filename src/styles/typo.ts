import { pallette } from './colors';
import { BasicTypo, FontWeightTypes, TypoType } from './types';
import { TextStyle } from 'react-native';

export const basicTypo: BasicTypo = {
  title: {
    fontSize: 24,
    lineHeight: 32,
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  large: {
    fontSize: 16,
    lineHeight: 22,
  },
  normal: {
    fontSize: 14,
    lineHeight: 20,
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
};

export default {
  basicTypo,
  getTextStyle(
    type: TypoType = 'normal',
    fontWeight: FontWeightTypes = 'normal',
    color: string = pallette.black,
  ): TextStyle {
    return {
      ...basicTypo[type],
      fontWeight,
      color,
    };
  },
};
