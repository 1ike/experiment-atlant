import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useBootstrap from './src/bootstrap/useBootstrap';
import useColorScheme from './src/styles/hooks/useColorScheme';
import AppThemeProvider from './src/styles/AppThemeProvider';
import Navigation from './src/navigation';
import store from './src/state/store';


export default function App() {
  const isLoadingComplete = useBootstrap();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppThemeProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar translucent />
        </AppThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
