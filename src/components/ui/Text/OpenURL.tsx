import { Text, TextProps } from '.';
import { useOpenURL } from '../hooks/useOpenUrl';


type TextOpenURLProps = TextProps & {
  url: string,
};

export function TextOpenURL({
  url, style, ...otherProps
}: TextOpenURLProps) {
  const handlePress = useOpenURL(url);

  return (
    <Text
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPress={handlePress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={[{ fontWeight: 'bold' }, style]}
      {...otherProps}
    />
  );
}
