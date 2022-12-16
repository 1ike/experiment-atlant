import { Text, TextProps } from '.';
import { useLink } from '../hooks/useLink';


type TextLinkProps = TextProps & {
  url: string,
};

export function TextLink({
  url, style, ...otherProps
}: TextLinkProps) {
  const handlePress = useLink(url);

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
