import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  // eslint-disable-next-line react/destructuring-assignment, react-native/no-inline-styles
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
