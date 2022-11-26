import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './styles/hooks/useColorScheme';
import AppThemeProvider from './styles/AppThemeProvider';
import Navigation from './navigation';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar translucent />
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}
