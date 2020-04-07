import { pallette } from './colors';
import { TypoTypes, BasicTypo, FontWeight } from './styleTypes';
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
};

export default {
  getTextStyle(
    type: TypoTypes,
    fontWeight: FontWeight = 'normal',
    color: string = pallette.black,
  ): TextStyle {
    return {
      ...basicTypo[type],
      fontWeight,
      color,
    };
  },
};
