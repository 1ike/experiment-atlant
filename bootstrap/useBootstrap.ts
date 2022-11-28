import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { beforeRendering, afterRendering } from './index';

export default function useBootstrap() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app or posterior
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        SplashScreen.preventAutoHideAsync();

        await beforeRendering();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();

        await afterRendering();
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
