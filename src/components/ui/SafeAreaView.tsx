import {
  SafeAreaView as DefaultSafeAreaView,
  SafeAreaViewProps as DefaultSafeAreaViewProps,
} from 'react-native-safe-area-context';
import { useTheme } from '@rneui/themed';


export type SafeAreaViewProps = DefaultSafeAreaViewProps;

export function SafeAreaView({ style, ...otherProps }: SafeAreaViewProps) {
  const { theme } = useTheme();
  const backgroundColor = theme.colors.background;

  return (
    <DefaultSafeAreaView {...otherProps} style={[{ flex: 1, backgroundColor }, style]} />
  );
}
