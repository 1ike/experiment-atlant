import { useCallback } from 'react';
import { Alert, Linking } from 'react-native';


export function useOpenURL(url: string) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return handlePress;
}
