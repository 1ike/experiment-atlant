import * as Font from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';


export default async () => {
  await Font.loadAsync({
    ...FontAwesome.font,
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf') as Font.FontSource,
  });
};
