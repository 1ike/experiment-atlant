import { View as DefaultView } from 'react-native';
import { useTheme } from '@rneui/themed';


export type ViewProps = DefaultView['props'];

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  const { theme } = useTheme();
  const backgroundColor = theme.colors.background;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
