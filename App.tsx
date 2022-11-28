import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useBootstrap from './bootstrap/useBootstrap';
import useColorScheme from './styles/hooks/useColorScheme';
import AppThemeProvider from './styles/AppThemeProvider';
import Navigation from './navigation';
import store from './state/store';


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
