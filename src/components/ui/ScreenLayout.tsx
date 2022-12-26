import { useTheme } from '@rneui/themed';

import { SafeAreaView, SafeAreaViewProps } from './SafeAreaView';


export type ScreenLayoutProps = SafeAreaViewProps & {
  withPadding?: boolean,
  withPaddingHorizontal?: boolean,
  withPaddingVertical?: boolean,
};

export function ScreenLayout(props: ScreenLayoutProps) {
  const {
    style, withPadding, withPaddingHorizontal, withPaddingVertical, ...otherProps
  } = props;
  const { theme } = useTheme();

  const paddingHorizontal = theme.screenPaddingHorizontal;
  const paddingVertical = theme.screenPaddingVertical;

  return (
    <SafeAreaView
      style={[
        withPadding && { paddingHorizontal, paddingVertical },
        !withPadding && withPaddingHorizontal && { paddingHorizontal },
        !withPadding && withPaddingVertical && { paddingVertical },
        style,
      ]}
      {...otherProps}
    />
  );
}
