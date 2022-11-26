import { useEffect } from 'react';
import {
  ThemeProvider, createTheme, useThemeMode,
} from '@rneui/themed';

import { View } from '../components/ui/View';
import useColorScheme from './hooks/useColorScheme';


declare module '@rneui/themed' {
  export interface Colors {
    buttonClearSecondaryTitle: string;
  }
}

const appTheme = createTheme({
  lightColors: {
    // primary: '#899656',
    buttonClearSecondaryTitle: 'red',
    // background: 'pink'
  },
  darkColors: {
    // primary: '#344512',
    background: 'red'
  },
  mode: 'light',
});

type ChildrenProps = { children: React.ReactNode };

function ColorScheme({ children }: ChildrenProps) {
  const colorMode = useColorScheme();
  const { setMode } = useThemeMode();

  useEffect(() => {
    setMode(colorMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

  return (
    <View style={{ flex: 1 }}>{children}</View>
  );
}


export default function AppThemeProvider({ children }: ChildrenProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <ColorScheme>
        {children}
      </ColorScheme>
    </ThemeProvider>
  );
}
