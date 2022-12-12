import { useTheme } from '@rneui/themed';

import { SafeAreaView, SafeAreaViewProps } from './SafeAreaView';


export type ScreenLayoutProps = SafeAreaViewProps & {
  withPadding?: boolean
};

export function ScreenLayout(props: ScreenLayoutProps) {
  const { style, withPadding, ...otherProps } = props;
  const { theme } = useTheme();

  const paddingHorizontal = theme.screenPaddingHorizontal;
  const paddingVertical = theme.screenPaddingVertical;

  return (
    <SafeAreaView
      style={[withPadding && { paddingHorizontal, paddingVertical }, style]}
      {...otherProps}
    />
  );
}
