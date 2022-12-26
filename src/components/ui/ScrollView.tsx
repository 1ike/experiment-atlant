import { ScrollView as DefaultScrollView, ScrollViewProps as DefaultScrollViewProps } from 'react-native';
import { useTheme } from '@rneui/themed';

export type ScrollViewProps = DefaultScrollViewProps & {
  withPadding?: boolean,
  withPaddingHorizontal?: boolean,
  withPaddingVertical?: boolean,
};

export function ScrollView(props: ScrollViewProps) {
  const {
    style, withPadding, withPaddingHorizontal = true, withPaddingVertical, ...otherProps
  } = props;
  const { theme } = useTheme();

  const paddingHorizontal = theme.screenPaddingHorizontal;
  const paddingVertical = theme.screenPaddingVertical;

  return (
    <DefaultScrollView
      contentContainerStyle={[
        withPadding && { paddingHorizontal, paddingVertical },
        !withPadding && withPaddingHorizontal && { paddingHorizontal },
        !withPadding && withPaddingVertical && { paddingVertical },
        style,
      ]}
      {...otherProps}
    />
  );
}
