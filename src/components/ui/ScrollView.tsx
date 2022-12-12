import { ScrollView as DefaultScrollView, ScrollViewProps as DefaultScrollViewProps } from 'react-native';
import { useTheme } from '@rneui/themed';


export type ScrollViewProps = DefaultScrollViewProps;

export function ScrollView(props: ScrollViewProps) {
  const { style, ...otherProps } = props;
  const { theme } = useTheme();

  const paddingHorizontal = theme.screenPaddingHorizontal;
  const paddingVertical = theme.screenPaddingVertical;

  return (
    <DefaultScrollView
      contentContainerStyle={[{ paddingHorizontal, paddingVertical }, style]}
      {...otherProps}
    />
  );
}
