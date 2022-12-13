import { createTheme } from '@rneui/themed';
import { FlexStyle } from 'react-native';


declare module '@rneui/themed' {
  export interface Colors {
    buttonClearSecondaryTitle: string;
    inputBackground: string;
    textPrimary: string;
    textSecondary: string;
  }

  export interface Theme {
    screenPaddingHorizontal: FlexStyle['paddingHorizontal'];
    screenPaddingVertical: FlexStyle['paddingVertical'];
    fontSizeSmall: number;
    fontSizeMid: number;
    fontSizeBigHeader: number;
  }
}


const buttonClearSecondaryTitle = '#8a8a8a';
const textPrimary = '#222';
const textSecondary = '#aaa';
const inputBackground = '#e8e8e8';

export const theme = createTheme({
  lightColors: {
    textPrimary,
    textSecondary,
    buttonClearSecondaryTitle,
    inputBackground,
  },
  darkColors: {
    textPrimary,
    textSecondary,
    buttonClearSecondaryTitle,
    inputBackground,
  },
  mode: 'light',

  screenPaddingHorizontal: 15,
  screenPaddingVertical: 15,
  fontSizeSmall: 15,
  fontSizeMid: 18,
  fontSizeBigHeader: 30,
});
