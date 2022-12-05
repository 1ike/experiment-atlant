import { createTheme } from '@rneui/themed';
import { FlexStyle } from 'react-native';


declare module '@rneui/themed' {
  export interface Colors {
    buttonClearSecondaryTitle: string;
  }

  export interface Theme {
    screenPaddingHorizontal: FlexStyle['paddingHorizontal'];
    screenPaddingVertical: FlexStyle['paddingVertical'];
  }
}


const buttonClearSecondaryTitle = '#8a8a8a';

export const theme = createTheme({
  lightColors: {
    // primary: '#899656',
    buttonClearSecondaryTitle,
    // background: 'pink'
  },
  darkColors: {
    // primary: '#344512',
    buttonClearSecondaryTitle,
    // background: 'red'
  },
  mode: 'light',

  screenPaddingHorizontal: 15,
  screenPaddingVertical: 20,
});
