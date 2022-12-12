import { useEffect } from 'react';
import { ThemeProvider, useThemeMode } from '@rneui/themed';

import useColorScheme from './hooks/useColorScheme';
import { View } from '$ui';
import { theme } from './theme';


type ChildrenProps = { children: React.ReactNode };

function ColorScheme({ children }: ChildrenProps) {
  const colorMode = useColorScheme();
  const { setMode } = useThemeMode();

  useEffect(() => {
    setMode(colorMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }}>{children}</View>
  );
}


export default function AppThemeProvider({ children }: ChildrenProps) {
  return (
    <ThemeProvider theme={theme}>
      <ColorScheme>
        {children}
      </ColorScheme>
    </ThemeProvider>
  );
}
