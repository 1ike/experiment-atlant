import { useTheme } from '@rneui/themed';

import { SafeAreaView, SafeAreaViewProps } from './SafeAreaView';


export type ScreenLayoutProps = SafeAreaViewProps;

export function ScreenLayout(props: ScreenLayoutProps) {
  const { style, ...otherProps } = props;
  const { theme } = useTheme();

  const paddingHorizontal = theme.screenPaddingHorizontal;
  const paddingVertical = theme.screenPaddingVertical;

  return <SafeAreaView style={[{ paddingHorizontal, paddingVertical }, style]} {...otherProps} />;
}
